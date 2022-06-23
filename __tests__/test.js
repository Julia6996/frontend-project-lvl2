import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);

test('gendiff file test json', () => {
const expected = fs.readFileSync(getFixturePath('correct-json.txt'), 'utf-8');

const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
expect(result).toEqual(expected);
});

test('gendiff file test yaml', () => {
   const expected = fs.readFileSync(getFixturePath('correct-yaml.txt'), 'utf-8');

  const result = genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'));
  expect(result).toEqual(expected);
});
