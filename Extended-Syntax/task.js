

// function calculateQuadraticEquation(){
//     let a = +window.a.value;
//     let b = +window.b.value;
//     let c = +window.c.value;
//     let result = getResult(a,b,c);
//     window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
//     let span = window.result;
//     span.textContent = "х = "+result;
// }

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    //return x;
    let d = b**2 - 4 * a * c;

  let x,
      x1,
      x2;

  if (d < 0) {
    x = [];
  } else if (d == 0) {
    x1 = (- b + d^2) / (2 * a);
    x = [x1];
  } else if (d > 0) {
    x1 = (- b + d^2) / (2 * a);
    x2 = (- b - d^2) / (2 * a);
    x = [x1, x2];
  }

  return x;
}

// function calculateAverageRating(){
//     let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
//     let averageMark = getAverageMark(marks);
//     window.averageMark.textContent = averageMark;
// }

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    //return averageMark;
    let sum = 0;

  //console.log(marks.length);

  if (marks.length > 5) {
    console.log('Количество оценок больше 5: ' + marks);
  }

  let marks1 = marks.slice(0, 5);

  for (let i = 0; i < marks1.length; i++) {
    sum += marks1[i];
  }
  
  console.log('Средняя отметка: ' + sum / marks1.length);
}

let marks = [5, 4, 3, 5, 5, 4, 5, 3];
getAverageMark(marks)


// function calculateDrinkTask(){
//     let name = window.personName.value;
//     let dateOfBirthday = new Date(window.dateOfBirthday.value);
//     let drink = askDrink(name, dateOfBirthday);
//     window.drink.textContent = drink;
// }

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;
    let age = new Date().getFullYear() - dateOfBirthday;

    if (age >= 18) {
      console.log(`Не желаете ли олд-фэшн, ${name}?`);
    } else if (age < 18) {
      console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    }
  
  }
  
  let name = 'Евгений',
  dateOfBirthday = 2010;
  askDrink(name, dateOfBirthday);