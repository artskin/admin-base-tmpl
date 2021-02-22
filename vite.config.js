
import {createVuePlugin} from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default {
  plugins: [createVuePlugin()],
  resolve:{
    alias:{
      '@':'/src/'
    },
  },
  
  server: {
    port:4000,
  //   hmr: {
  //     port: 443,
  //   }
  }
}