import getFileData from './path.js';
import _ from 'lodash';

const genDiff = (filepath1, filepath2) => {
  const firstDataFile = getFileData(filepath1);
  const secondDataFile = getFileData(filepath2);
  const getKeyFirstDataFile = _.keys(firstDataFile);
  const getKeySecondDataFile = _.keys(secondDataFile); 
  const uniqKeys = _.union(getKeyFirstDataFile, getKeySecondDataFile);
  uniqKeys.sort();

  const result = {};
  
  uniqKeys.forEach((key) => {
    if (_.has(firstDataFile, key) && !_.has(secondDataFile, key)) {
      result[`- ${key}`] = firstDataFile[key];
    } else if (!_.has(firstDataFile, key) && _.has(secondDataFile, key)) {
      result[`+ ${key}`] = secondDataFile[key];
    } else if (
      _.has(firstDataFile, key) &&
      _.has(secondDataFile, key) &&
      firstDataFile[key] === secondDataFile[key]
    ){
      result[`  ${key}`] = firstDataFile[key];
    } else if (
      _.has(firstDataFile, key) &&
      _.has(secondDataFile, key) &&
      firstDataFile[key] !== secondDataFile[key]
    ){
      result[`- ${key}`] = firstDataFile[key];
      result[`+ ${key}`] = secondDataFile[key];
  }
  })

  const resultStringfy = JSON.stringify(result, null, 2);
  return resultStringfy.replace(/"/g, "").replace(/,/g, " ");
};
  
export default genDiff;
