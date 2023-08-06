import { defineConfig } from 'vite'
import {createVuePlugin} from 'vite-plugin-vue2'
import { viteMockServe } from 'vite-plugin-mock';
import basicSsl from '@vitejs/plugin-basic-ssl';

const crossHost = 'https://api.senseui.im/'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    basicSsl(),
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
    //host:'',
    port:3001,
    https:true,
    // cors:true,
    // proxy: {
    //   '/api': {
    //     target: crossHost,
    //     changeOrigin: true,
    //     secure: false
    //   },
    // }
  //   hmr: {
  //     port: 443,
  //   }
  },
  build:{
    outDir:'docs'
  }
})