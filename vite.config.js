import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  //1. base로 기본경로설정
  base: '/', 
  plugins: [react()],
  
  //2. server의 proxy 설정
  // 리엑트 5172 port -> 스프링 8088 port
  // port 가 다르면 cross-origin 으로 간주하고 차단!
  server :{
    proxy:{
      '/api' : 'http://localhost:8088'
    }
  }
})
