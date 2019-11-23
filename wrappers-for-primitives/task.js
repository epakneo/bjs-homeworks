'use strict'

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}



function calculateTotalMortgage(percent, contribution, amount, date) {

    // код для задачи №1 писать здесь
    //return totalAmount;
    if (typeof parseInt(persent) != 'number'){
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    } else if (typeof parseInt(contribution) != "number"){
        return `Параметр "Первоначальный взнос" содержит неправильное значение ${contribution}`;
    } else if (typeof parseInt(amount) != "number"){
        return `Параметр "Сумма кредита" содержит неправильное значение ${amount}`;
    }


    let dateStart = new Date(),
    dateEnd = new Date(date);
    let months = (dateEnd.getFullYear() - dateStart.getFullYear()) * 12;
    months -= dateStart.getMonth() + 1;
    months += dateEnd.getMonth();
    //console.log(months <= 0 ? 0 : months);
    let n = months <= 0 ? 0 : months;
    

    let S = parseInt(amount) - parseInt(contribution),
    P = parseInt(percent) / 100 / 12;
    
    let payment = S * (P + P / (((1 + P) ^ n) - 1));

    let totalAmont = payment * n;

    console.log(totalAmont.toFixed(2));
    return totalAmont.toFixed(2);
}




function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
    let greeting;

    if (typeof(name) === 'string' && name !== ''){
      greeting = `Привет, мир! Меня зовут ${name}`;
    } else {   
      greeting = 'Привет, мир! Меня зовут Аноним';
    }
    return greeting;
}
