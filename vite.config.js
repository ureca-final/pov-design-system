import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import copy from 'rollup-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    svgr(),
    copy({
      targets: [
        { src: 'src/assets/svg/*.svg', dest: 'dist/assets' },  // SVG 파일 복사
      ],
    }),
  ],
  publicDir: 'public',
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
