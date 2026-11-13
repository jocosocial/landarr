import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [
    react(),
    {
      // GitHub Pages serves public/404.html for unknown paths like /clients, but the dev server
      // falls back to index.html. Serve the same page so the redirects can be tested locally.
      name: 'serve-404-for-clients',
      configureServer: server => {
        server.middlewares.use((req: {url?: string}, _res, next) => {
          if (req.url && /^\/clients\/?(\?|$)|^\/clients\/faq\/?(\?|$)/.test(req.url)) {
            req.url = '/404.html';
          }
          next();
        });
      },
    },
  ],
});
