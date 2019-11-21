"use strict";

console.log("==================Задача № 1=================")

function getSolutions(a,b,c){
  let d = b**2 - 4 * a * c;
    
  if (d < 0) {
    return {
      D: d,
      roots: [d]
    }
  } else if (d === 0) {
    let x1 = - b / (2 * a);
    return {
      D: d,
      roots: [x1]
    } 
  } else if (d > 0) {
    let x1 = (- b + Math.sqrt(d)) / (2 * a),
        x2 = (- b - Math.sqrt(d)) / (2 * a);
    return {
      D: d,
      roots: [x1, x2]
    }
  }
}

function showSolutionsMessage(a,b,c){
  let result = getSolutions(a,b,c);
  
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D < 0) {
    console.log('Уравнение не имеет вещественных корней');
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
  } else if (result.D > 0) {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

console.log("==================Задача № 2=================")

function getAverageScore(data) {
    let result = {};
    let totalMark = 0;
    let marks = 0;
      for (let subject in data) {
        const averageMark = getAverageArray(data[subject]);
        result[subject] = averageMark;
        totalMark += averageMark;
        let average = totalMark;
        result.average = average/ ++marks;
      }
      return result;
}

function getAverageArray(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
    return sum / data.length;
}

console.log(getAverageScore({
  algebra: [4, 5, 1, 2, 3, 4],
  geometry: [2, 4, 5],
  russian: [3, 3, 4, 5],
  physics: [5, 5],
  music: [2, 2, 6],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [2, 7, 8],
  french: [5, 5]
}));

console.log("==================Задача № 3=================")

let resultObject ={};
function getPersonData(secretData) {
  let keys;
  
  for(let key in secretData) {
    if (key === 'aaa') {
      keys = 'firstName';
    } else {
      keys = 'secondName';
    }

  resultObject[keys] = decodeName(secretData);
  }

  return {
    resultObject
  }
}


function decodeName(secretData) {
  let keys;
  for(let key in secretData) {
    if( secretData[key] === 0) {
      keys = 'Родриго';
    } else {
      keys = 'Эмильо'; 
    }
  }
  return keys;
}

console.log(getPersonData({
  aaa : 1,
  bbb : 0
}));