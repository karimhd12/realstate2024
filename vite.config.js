import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
<<<<<<< HEAD
=======
      '/api':{
        target:"https://realstate-api-2024.vercel.app/",
        secure:false,
      }
>>>>>>> 5821cef544f5b361e158ccc7a0da5b1b76cf00f4
    }
  },
  plugins: [react()],
})
