#!/usr/bin/env node

const fs = require('fs');

const filterFiles = (fileList) => {
  let allFiles = [];
  for (let file of fileList) {
    if (file.includes('file') || file.includes('File') || file.includes('FILE')) {
      allFiles.push(file);
    }
  }
  allFiles.sort();
  return allFiles;
}

const writeFileFile = (fileList) => {
  const file = fs.createWriteStream('FileFile');
  file.on('error', (err) => {throw err;});
  fileList.forEach(f => {file.write(`${f}\n`);});
  file.end();
}

fs.readdir('./', (err, files) => {
  if (err) {throw err;}
  files = filterFiles(files);
  writeFileFile(files);
});
