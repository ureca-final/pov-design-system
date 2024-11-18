import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  resolve: {
    alias: {
      // 경로를 절대 경로로 설정
      '@': '/src',
      '@components': '/src/components',
      '@types': '/src/types',
      '@hooks': '/src/hooks',
      '@styles': '/src/styles',
      '@constants': '/src/constants',
      '@assets': '/src/assets',
      '@stories': '/src/stories',
      '@utils': '/src/utils',
    },
  },
});
