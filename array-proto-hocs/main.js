'use strict';

function compareArrays(arr1, arr2) {
  return arr1.length !== arr2.length ? false : arr1.every((currentValue, index) => currentValue === arr2[index]);
}

function sum(...nums) {
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}

function memoize(fn, limit) {
  let results = [];

  return function() {
    let args1 = Array.from(arguments);
    let search = results.find(result => compareArrays(result.args, args1));

    if (search) {
     return `Результат ${search.result} из памяти.`;
    }
  
    results.unshift({args: args1, result: fn(...args1)});

    if (results.length > limit) {
      results.splice(limit);
    }
    
    return results[0].result;
  }
}

const mSum = memoize(sum, 3);
console.log(mSum(3, 4));
console.log(mSum(1, 3));
console.log(mSum(3, 1, 3));
console.log(mSum(5, 4, 2));

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true