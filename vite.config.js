import { defineConfig } from 'vite'
import {createVuePlugin} from 'vite-plugin-vue2'
import { viteMockServe } from 'vite-plugin-mock';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    viteMockServe({
      // default
      mockPath: 'mock',
      // localEnabled: command === 'serve',
    })
  ],
  resolve:{
    alias:{
      '@':'/src'
    },
  },
  server: {
    port:3001,
    cors:true,
  //   hmr: {
  //     port: 443,
  //   }
  }
})