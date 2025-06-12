import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// export default {
//   server: {
//     host: '127.0.0.1',
//     port: 5173
//   }
// }
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})



