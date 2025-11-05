// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // **Esta línea es crucial**

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // **Y esta también**
  ],
});
