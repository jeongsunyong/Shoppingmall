import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Shoppingmall/',   // 레포 이름 그대로 유지
  build: {
    outDir: '../docs',      // ✅ 상위 폴더에 docs 생성
    emptyOutDir: true,      // 빌드할 때 기존 docs 비우기
  },
  plugins: [react()],
})
