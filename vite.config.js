import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://material-react-table.com', // Backend server domain
        changeOrigin: true, // Update Host header to match the target
        secure: true, // Use true for HTTPS requests
      },
    },
  },
});
