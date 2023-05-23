import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import glsl from 'vite-plugin-glsl';

export default defineConfig({
  root: './src',
  publicDir: '../static',
  plugins: [cssInjectedByJsPlugin(), glsl()],
  server: {
    port: 3000
  }
});
