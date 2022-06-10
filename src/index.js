import getFilePath from './path.js';
import _ from 'lodash';

const genDiff = (filepath1, filepath2) => {
  const file1 = getFilePath(filepath1);
  const file2 = getFilePath(filepath2);
  const getKey1 = _.keys(file1);
  const getKey2 = _.keys(file2);
  const keysAll = _.union(getKey1, getKey2);
  keysAll.sort();
  const result = {};
  for (let key of keysAll) {
    if (_.has(file1, key) && !_.has(file2, key)) {
      result[`- ${key}`] = file1[key];
    } else if (!_.has(file1, key) && _.has(file2, key)) {
      result[`+ ${key}`] = file2[key];
    } else if (
      _.has(file1, key) &&
      _.has(file2, key) &&
      file1[key] === file2[key]
    ){
      result[`  ${key}`] = file1[key];
    } else if (
      _.has(file1, key) &&
      _.has(file2, key) &&
      file1[key] !== file2[key]
    ){
      result[`- ${key}`] = file1[key];
      result[`+ ${key}`] = file2[key];
  }
}
  const resultStringfy = JSON.stringify(result, null, 2);
  return resultStringfy.replace(/"/g, "").replace(/,/g, " ");
};
  
export default genDiff;
