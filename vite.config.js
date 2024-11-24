import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

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
  ],
  publicDir: 'public',
  build: {
    lib: {
      entry: 'src/index.tsx', // 라이브러리의 진입점
      name: 'MyLibrary', // UMD 빌드를 위한 이름
      fileName: (format) => `my-library.${format}.js`,
    },
    rollupOptions: {
      // 외부 의존성을 설정
      external: ['react', 'react-dom'], // React를 외부 모듈로 설정
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
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
