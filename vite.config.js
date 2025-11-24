import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        wpc: resolve(__dirname, 'wpc.html'),
        epoxy: resolve(__dirname, 'epoxy.html'),
        houselifting: resolve(__dirname, 'houselifting.html'),
        upvc: resolve(__dirname, 'upvc.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
