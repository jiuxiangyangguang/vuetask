import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import requireTransform from 'vite-plugin-require-transform/dist'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    requireTransform({
      fileRegex: /.js$|.vue$/
    }),
    vue()
  ],
  server: {
    host: true,
    port: 1102,
    open: true
  }
})
