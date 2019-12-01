"use strict";

console.log("==================Задача № 1=================")

class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
  }

  takeDamage(damage) {
    if (damage > this.durability) {
      console.log(0);
    } else {
      console.log(this.durability - damage);
    }
  }

  getDamage() {
    if (this.durability >= (this.durability / 100 * 30)) {
      return this.attack;
    } else {
      return this.attack / 2;
    }
    
    if (this.durability === 0) {
      return 0;
    }
  }

  isBroken() {
    if (this.durability > 0) {
      return false;
    } else {
      return true;
    }
  }


  
}

const sword = new Weapon('Старый меч', 20, 10, 1);
console.log(sword);
sword.takeDamage(5); //console.log(sword.durability); // 5
sword.takeDamage(50); //console.log(sword.durability); // 0

const arm = new Weapon('Рука', 1, Infinity, 1);
console.log(arm);
arm.takeDamage(20); //console.log(arm.durability); // Infinity

const bow = new Weapon('Лук', 10, 200, 3);
console.log(bow);
bow.takeDamage(20); //console.log(bow.durability); // 180
bow.takeDamage(200); //console.log(bow.durability); // 0

//Создайте метод getDamage(), рассчитывающий урон от удара данным оружием. Если прочность оружия (durability) больше или равна 30% от изначального, необходимо выдать значение свойства attack, иначе attack / 2. При прочности 0, метод возвращает 0.
console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(bow.getDamage()); // 1

//Создайте метод isBroken(), показывающий, сломано ли оружие. Возвращает false при durability более 0.
console.log(bow.durability); // 0
console.log(bow.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(bow.isBroken()); // false

//Создайте экземпляры оружия из таблицы 1 и экземпляры улучшенного из таблицы 2.
//Таблица 1. Варианты оружия.
let table1 = [
  new Weapon('Рука', 1, Infinity, 1),
  new Weapon('Лук', 10, 200, 3),
  new Weapon('Меч', 25, 500, 1),
  new Weapon('Нож', 5, 300, 1),
  new Weapon('Посох', 8, 300, 2)
]
console.log(table1);

//Таблица 2. Варианты усиленного оружия. Прочерк («-») — свойство берётся из обычного аналога.
let tablet2 = [
  new Weapon('Длинный лук', 15, 200, 4),
  new Weapon('Секира', 27, 800, 1),
  new Weapon('Посох бури', 10, 300, 3)
]
console.log(tablet2);

console.log("==================Задача № 2=================")

class Bow extends Weapon {
  constructor () {
  super ('лук',10, 200, 3);
  }

}

class Arm extends Weapon {
  constructor () {
  super ('рука',1, Infinity, 1);
  }
}

class Sword extends Weapon {
constructor () {
  super ('меч',25, 500, 1);
  }
}

class Knife extends Weapon {
  constructor () {
  super ('нож',5, 300, 1);
  }
}

class Pikestaff extends Weapon {
  constructor () {
  super ('посох',8, 300, 2);
  }
}


class NewBow extends Bow {
  constructor () {
  super (200);
  this.name = 'Длинный лук',
  this.attack  = 15,
  this.range = 4
  }

}

class NewSword extends Sword {
  constructor () {
  super (1);
  this.name = 'секира',
  this.attack  = 27,
  this.durability = 800
  }

}

class NewPikestaff extends Pikestaff {
  constructor () {
  super (300);
  this.name = 'посох Бури',
  this.attack  = 10,
  this.range = 3
  }
}

const newbow = new Bow();

console.log(bow.name); // Лук
console.log(bow.attack); // 10
console.log(bow.durability); // 200
console.log(bow.range); // 3

console.log("==================Задача № 3=================")

class StudentLog {
  constructor(name) {
    this.name = name;
    this.obj = {};
    this.arr = [];
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) { 

    if (!(subject in this.obj)) {
      this.obj[subject] = [];
    } 
    if (grade >= 1 && grade <= 5) {
      this.obj[subject].push(grade);
      console.log(this.obj);
    } else {
       console.log(`Вы пытались поставить оценку ${grade}, принимаются только оценки от 1 до 5`);
    }
    return this.obj[subject].length;
  }

  getAverageBySubject(subject) {
    if (subject === '') {
      return 0;
    } else if (!(subject in this.obj)) {
      return 0;
    } else {
      let sum = 0;
      for (let i = 0; i < this.obj[subject].length; i++) {
        sum += this.obj[subject][i];
      }
      return sum / this.obj[subject].length;
    }
  }

  getTotalAverage() {
    let sum;
    let result;

    for (let subject in this.obj) {
      if (subject === '') {
        return 0;
      } else if (!(subject in this.obj)) {
        return 0; 
      } else {
        this.arr.push(this.obj[subject]);
        result = this.arr.reduce(function(flat, current) {
          return flat.concat(current);
        }, []);
        sum = 0;

        for (let i = 0; i < result.length; i++) {
          sum += result[i];
        }
      }
    }
    return sum / result.length;
  }
 }

  
const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage()); // 3,75