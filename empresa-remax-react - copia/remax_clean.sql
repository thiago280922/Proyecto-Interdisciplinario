CREATE DATABASE IF NOT EXISTS remax_db;
USE remax_db;

-- (TABLA CLIENTE)
CREATE TABLE cliente (
    id_cliente INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20),
    preferencias VARCHAR(50)
);

-- (TABLA AGENTE)
CREATE TABLE agente (
    id_agente INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20),
    comision DECIMAL(10,2) DEFAULT 5.00 -- porcentaje
);

-- (TABLA PROPIEDAD)
CREATE TABLE propiedad (
    id_propiedad INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    direccion VARCHAR(200) NOT NULL,
    tipo ENUM('Casa','Departamento','PH','Terreno') NOT NULL,
    ambientes ENUM('1','2','3 o mas') NOT NULL,
    precio DECIMAL(15,2) NOT NULL,
    estado ENUM('Disponible','Reservada','Vendida') DEFAULT 'Disponible',
    id_agente INT UNSIGNED,
    id_cliente INT UNSIGNED,
    FOREIGN KEY (id_agente) REFERENCES agente(id_agente)
        ON UPDATE CASCADE ON DELETE SET NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
        ON UPDATE CASCADE ON DELETE SET NULL
);

-- (TABLA VISITA)
CREATE TABLE visita (
    id_visita INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    fecha_hora DATETIME NOT NULL,
    estado ENUM('Pendiente','Confirmada','Realizada','Cancelada') DEFAULT 'Pendiente',
    id_agente INT UNSIGNED NOT NULL,
    id_cliente INT UNSIGNED NOT NULL,
    id_propiedad INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_agente) REFERENCES agente(id_agente)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_propiedad) REFERENCES propiedad(id_propiedad)
        ON UPDATE CASCADE ON DELETE CASCADE
);

-- (TABLA VENTA)
CREATE TABLE venta (
    id_venta INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    fecha DATE DEFAULT (CURRENT_DATE),
    monto DECIMAL(15,2) NOT NULL,
    estado ENUM('Activa','Completada','Cancelada') DEFAULT 'Activa',
    id_cliente INT UNSIGNED NOT NULL,
    id_propiedad INT UNSIGNED NOT NULL,
    id_agente INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_propiedad) REFERENCES propiedad(id_propiedad)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_agente) REFERENCES agente(id_agente)
        ON UPDATE CASCADE ON DELETE CASCADE
);

-- Nota: Necesitas crear la tabla 'comisiones' y 'historial'
-- para que los triggers y procedimientos funcionen sin error.
CREATE TABLE comisiones (
    id_comision INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_agente INT UNSIGNED NOT NULL,
    id_venta INT UNSIGNED NOT NULL,
    porcentaje DECIMAL(5,2) NOT NULL,
    monto_comision DECIMAL(12,2) NOT NULL,
    FOREIGN KEY (id_agente) REFERENCES agente(id_agente),
    FOREIGN KEY (id_venta) REFERENCES venta(id_venta)
);

CREATE TABLE historial (
    id_registro INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    tabla_afectada VARCHAR(50) NOT NULL,
    id_registro_afectado INT UNSIGNED,
    accion ENUM('Insercion','Actualizacion','Asignacion') NOT NULL,
    usuario VARCHAR(50) NOT NULL,
    descripcion TEXT,
    fecha_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


DELIMITER //

-- sp_registrarVenta (Corregido a singular: venta, propiedad)
CREATE PROCEDURE sp_registrarVenta (
    IN p_id_propiedad INT,
    IN p_id_cliente INT,
    IN p_id_agente INT,
    IN p_monto DECIMAL(12,2),
    OUT p_mensaje VARCHAR(255)
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION 
    BEGIN
        ROLLBACK;
        SET p_mensaje = 'Error al registrar la venta. Transaccion revertida.';
    END;

    START TRANSACTION;

    -- Insertar la venta (Corregido a singular)
    INSERT INTO venta (id_propiedad, id_cliente, id_agente, monto)
    VALUES (p_id_propiedad, p_id_cliente, p_id_agente, p_monto);

    -- Actualizar propiedad (Corregido a singular)
    UPDATE propiedad SET estado = 'Vendida'
    WHERE id_propiedad = p_id_propiedad;

    COMMIT;
    SET p_mensaje = 'Venta registrada correctamente.';
END;
//

-- sp_programarVisita (Corregido a singular: visita)
CREATE PROCEDURE sp_programarVisita (
    IN p_id_agente INT,
    IN p_id_cliente INT,
    IN p_id_propiedad INT,
    IN p_fecha DATETIME,
    OUT p_mensaje VARCHAR(255)
)
BEGIN
    IF EXISTS (
        SELECT 1 FROM visita -- Corregido a singular
        WHERE id_agente = p_id_agente AND fecha_hora = p_fecha -- Corregido fecha_visita a fecha_hora
    ) THEN
        SET p_mensaje = 'El agente ya tiene una visita en ese horario.';
    ELSE
        INSERT INTO visita (id_agente, id_cliente, id_propiedad, fecha_hora) -- Corregido a singular y fecha_visita a fecha_hora
        VALUES (p_id_agente, p_id_cliente, p_id_propiedad, p_fecha);
        SET p_mensaje = 'Visita programada correctamente.';
    END IF;
END;
//

-- sp_asignarPropiedad (Corregido a singular: propiedad)
CREATE PROCEDURE sp_asignarPropiedad (
    IN p_id_propiedad INT,
    IN p_id_agente INT,
    OUT p_mensaje VARCHAR(255)
)
BEGIN
    UPDATE propiedad -- Corregido a singular
    SET id_agente = p_id_agente
    WHERE id_propiedad = p_id_propiedad;

    INSERT INTO historial (tabla_afectada, id_registro_afectado, accion, usuario, descripcion)
    VALUES ('propiedad', p_id_propiedad, 'Asignacion', 'admin', -- Corregido a singular, y campo id_registro
            CONCAT('Propiedad asignada al agente ID ', p_id_agente));

    SET p_mensaje = 'Propiedad asignada correctamente.';
END;
//

-- sp_reporteVentasAgente (Corregido: Usa la tabla agente y venta)
CREATE PROCEDURE sp_reporteVentasAgente (
    IN p_id_agente INT
)
BEGIN
    SELECT 
        a.nombre AS agente,
        COUNT(v.id_venta) AS total_ventas,
        SUM(v.monto) AS total_monto_vendido,
        SUM(c.monto_comision) AS total_comision
    FROM agente a -- Usamos la tabla agente
    JOIN venta v ON a.id_agente = v.id_agente -- Usamos la tabla venta
    JOIN comisiones c ON v.id_venta = c.id_venta
    WHERE a.id_agente = p_id_agente -- Corregido a id_agente
    GROUP BY a.nombre;
END;
//

-- TRIGGERS
-- (Validar dominio de agentes)
CREATE TRIGGER validar_dominio_agente
BEFORE INSERT ON agente -- Corregido para usar la tabla AGENTE
FOR EACH ROW
BEGIN
    IF NEW.email NOT LIKE '%@remax.com' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Solo se permiten correos con dominio @remax.com para agentes.';
    END IF;
END;
//

-- (Evitar visitas duplicadas)
CREATE TRIGGER evitar_visita_duplicada
BEFORE INSERT ON visita -- Corregido a singular
FOR EACH ROW
BEGIN
    IF EXISTS (
        SELECT 1 FROM visita -- Corregido a singular
        WHERE id_agente = NEW.id_agente
          AND fecha_hora = NEW.fecha_hora -- Corregido fecha_visita a fecha_hora
    ) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'El agente ya tiene una visita programada en ese horario.';
    END IF;
END;
//

-- (Cambiar estado de propiedad al venderse)
CREATE TRIGGER actualizar_estado_propiedad
AFTER INSERT ON venta -- Corregido a singular
FOR EACH ROW
BEGIN
    UPDATE propiedad -- Corregido a singular
    SET estado = 'Vendida'
    WHERE id_propiedad = NEW.id_propiedad;
END;
//

-- (Calcular comision del agente automaticamente)
CREATE TRIGGER calcular_comision_agente
AFTER INSERT ON venta -- Corregido a singular
FOR EACH ROW
BEGIN
    DECLARE v_porcentaje DECIMAL(5,2) DEFAULT 5.00;
    DECLARE v_comision DECIMAL(12,2);

    SET v_comision = (NEW.monto * v_porcentaje) / 100;

    INSERT INTO comisiones (id_agente, id_venta, porcentaje, monto_comision)
    VALUES (NEW.id_agente, NEW.id_venta, v_porcentaje, v_comision);
END;
//

-- (Auditoria de cambios en propiedades)
CREATE TRIGGER auditoria_cambios_propiedades
AFTER UPDATE ON propiedad -- Corregido a singular
FOR EACH ROW
BEGIN
    INSERT INTO historial (tabla_afectada, id_registro_afectado, accion, usuario, descripcion)
    VALUES (
        'propiedad', -- Corregido a singular
        NEW.id_propiedad,
        'Actualizacion',
        'sistema_remax',
        CONCAT('La propiedad "', NEW.direccion, '" fue modificada. Estado anterior: ', OLD.estado, ', nuevo estado: ', NEW.estado)
    );
END;
//

DELIMITER ;