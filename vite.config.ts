import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// 报错找不到 path ，需要线 yarn add @types/node
export default defineConfig({
   plugins: [vue()],
   resolve: {
      alias: {
         '@': path.resolve(__dirname, "./src")
      }
   },
   base: "./"
})
