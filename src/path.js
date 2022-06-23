import { readFileSync } from 'fs';
import path from 'path';
import getParser from './parses.js';

const getFileData = (filePath) => {
const extension = path.extname(filePath);
const data = (readFileSync(path.resolve(process.cwd(), filePath), 'utf8'));  
return getParser(data, extension);
};

export default getFileData;
