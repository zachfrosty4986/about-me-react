// Import the defineConfig function from Vite to create a configuration object
import { defineConfig } from 'vite';

// Import the React plugin for Vite to enable React support
import react from '@vitejs/plugin-react';

// Export the Vite configuration object using defineConfig
// https://vitejs.dev/config/ for more configuration options
export default defineConfig({
  // Array of plugins to use with Vite
  plugins: [react()], // Includes the React plugin to handle React-specific features and optimizations
});
