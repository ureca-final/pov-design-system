const fs = require('fs');
const path = require('path');

// dist/assets 폴더 생성
const distAssetsPath = path.resolve(__dirname, 'dist/assets');
if (!fs.existsSync(distAssetsPath)) {
  fs.mkdirSync(distAssetsPath, { recursive: true });
}

// public/svg 폴더의 파일 복사
const svgSourcePath = path.resolve(__dirname, 'public/assets');
const svgFiles = fs.readdirSync(svgSourcePath);

svgFiles.forEach((file) => {
  const srcFile = path.join(svgSourcePath, file);
  const destFile = path.join(distAssetsPath, file);
  fs.copyFileSync(srcFile, destFile);
});