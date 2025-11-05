CREATE DATABASE IF NOT EXISTS remax_db;
USE remax_db;

CREATE TABLE cliente (
    id_cliente INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20),
    preferencias VARCHAR(50)
);


CREATE TABLE agente (
    id_agente INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20),
    comision DECIMAL(10,2) DEFAULT 5.00  -- porcentaje
);


CREATE TABLE propiedad (
    id_propiedad INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    direccion VARCHAR(200) NOT NULL,
    tipo ENUM('Casa','Departamento','PH','Terreno') NOT NULL,
    ambientes ENUM('1','2','3 o más') NOT NULL,
    precio DECIMAL(15,2) NOT NULL,
    estado ENUM('Disponible','Reservada','Vendida') DEFAULT 'Disponible',
    id_agente INT UNSIGNED,
    id_cliente INT UNSIGNED,
    FOREIGN KEY (id_agente) REFERENCES agente(id_agente)
        ON UPDATE CASCADE ON DELETE SET NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
        ON UPDATE CASCADE ON DELETE SET NULL
);


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


DELIMITER //
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
        SET p_mensaje = 'Error al registrar la venta. Transacción revertida.';
    END;

    START TRANSACTION;

    -- Insertar la venta
    INSERT INTO ventas (id_propiedad, id_cliente, id_agente, monto)
    VALUES (p_id_propiedad, p_id_cliente, p_id_agente, p_monto);

    -- Actualizar propiedad (trigger automático también lo hace)
    UPDATE propiedades SET estado = 'Vendida'
    WHERE id_propiedad = p_id_propiedad;

    COMMIT;
    SET p_mensaje = 'Venta registrada correctamente.';
END;
//
DELIMITER ;


DELIMITER //
CREATE PROCEDURE sp_programarVisita (
    IN p_id_agente INT,
    IN p_id_cliente INT,
    IN p_id_propiedad INT,
    IN p_fecha DATETIME,
    OUT p_mensaje VARCHAR(255)
)
BEGIN
    IF EXISTS (
        SELECT 1 FROM visitas 
        WHERE id_agente = p_id_agente AND fecha_visita = p_fecha
    ) THEN
        SET p_mensaje = 'El agente ya tiene una visita en ese horario.';
    ELSE
        INSERT INTO visitas (id_agente, id_cliente, id_propiedad, fecha_visita)
        VALUES (p_id_agente, p_id_cliente, p_id_propiedad, p_fecha);
        SET p_mensaje = 'Visita programada correctamente.';
    END IF;
END;
//
DELIMITER ;


DELIMITER //
CREATE PROCEDURE sp_asignarPropiedad (
    IN p_id_propiedad INT,
    IN p_id_agente INT,
    OUT p_mensaje VARCHAR(255)
)
BEGIN
    UPDATE propiedades
    SET id_agente = p_id_agente
    WHERE id_propiedad = p_id_propiedad;

    INSERT INTO historial (tabla_afectada, id_registro, accion, usuario, descripcion)
    VALUES ('propiedades', p_id_propiedad, 'Asignación', 'admin',
            CONCAT('Propiedad asignada al agente ID ', p_id_agente));

    SET p_mensaje = 'Propiedad asignada correctamente.';
END;
//
DELIMITER ;


DELIMITER //
CREATE PROCEDURE sp_reporteVentasAgente (
    IN p_id_agente INT
)
BEGIN
    SELECT 
        a.nombre AS agente,
        COUNT(v.id_venta) AS total_ventas,
        SUM(v.monto) AS total_monto_vendido,
        SUM(c.monto_comision) AS total_comision
    FROM usuarios a
    JOIN ventas v ON a.id_usuario = v.id_agente
    JOIN comisiones c ON v.id_venta = c.id_venta
    WHERE a.id_usuario = p_id_agente
    GROUP BY a.nombre;
END;
//
DELIMITER ;

USE remax_db;

DELIMITER //
CREATE TRIGGER validar_dominio_agente_admin
BEFORE INSERT ON usuarios
FOR EACH ROW
BEGIN
    IF NEW.rol IN ('agente','admin') 
       AND NEW.email NOT LIKE '%@remax.com' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Solo se permiten correos con dominio @remax.com para agentes o administradores.';
    END IF;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER evitar_visita_duplicada
BEFORE INSERT ON visitas
FOR EACH ROW
BEGIN
    IF EXISTS (
        SELECT 1 FROM visitas
        WHERE id_agente = NEW.id_agente
          AND fecha_visita = NEW.fecha_visita
    ) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'El agente ya tiene una visita programada en ese horario.';
    END IF;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER actualizar_estado_propiedad
AFTER INSERT ON ventas
FOR EACH ROW
BEGIN
    UPDATE propiedades
    SET estado = 'Vendida'
    WHERE id_propiedad = NEW.id_propiedad;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER calcular_comision_agente
AFTER INSERT ON ventas
FOR EACH ROW
BEGIN
    DECLARE v_porcentaje DECIMAL(5,2) DEFAULT 5.00;
    DECLARE v_comision DECIMAL(12,2);

    SET v_comision = (NEW.monto * v_porcentaje) / 100;

    INSERT INTO comisiones (id_agente, id_venta, porcentaje, monto_comision)
    VALUES (NEW.id_agente, NEW.id_venta, v_porcentaje, v_comision);
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER auditoria_cambios_propiedades
AFTER UPDATE ON propiedades
FOR EACH ROW
BEGIN
    INSERT INTO historial (tabla_afectada, id_registro, accion, usuario, descripcion)
    VALUES (
        'propiedades',
        NEW.id_propiedad,
        'Actualización',
        'sistema_remax',
        CONCAT('La propiedad "', NEW.direccion, '" fue modificada. Estado anterior: ', OLD.estado, ', nuevo estado: ', NEW.estado)
    );
END;
//
DELIMITER ;


