import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const cases = [
  // ['file1.json', 'file2.json', 'resultjson.txt', 'json'],
  ['file1.yaml', 'file2.yaml', 'resultstylish.txt', 'stylish'],
  ['file1.json', 'file2.json', 'resultstylish.txt', 'stylish'],
  ['file1.json', 'file2.json', 'resultplain.txt', 'plain'],
];

test.each(cases)('Compare %s and %s to expect %s in "%s" style', (firstArg, secondArg, expectedResult, format) => {
  const firstFile = getFixturePath(firstArg);
  const secondFile = getFixturePath(secondArg);
  const getResult = readFile(expectedResult);
  const result = genDiff(firstFile, secondFile, format);
  expect(result).toEqual(getResult);
});
