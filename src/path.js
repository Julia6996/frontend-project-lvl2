import { readFileSync } from 'fs';
import path from 'path';

const getFilePath = (file) => {
  const filePath = readFileSync(path.resolve(process.cwd(), file), 'utf-8');
  const fileConvert = JSON.parse(filePath);
  return fileConvert;
};

export default getFilePath;
