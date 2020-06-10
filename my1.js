' use strict';
// 2
var money,
    time;
money = +prompt("Ваш бюджет на месяц?", "2500000");

time = prompt("Введите дату в формате YYYY-MM-DD", "2020-02-02 ");
// 2 вид решение то есть онлайн время
// time = new Date();
// console.log(time);
//----------------4---------
let ans1 = prompt("Введите обязательную статью расходов в этом месяце");
//  let ans2 = prompt("Введите обязательную статью расходов в этом месяце");
let ans3 = prompt("Во сколько обойдется?");
//  let ans4 = prompt("Во сколько обойдется?");

//---------------3-------
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        otv1: ans1,
        otv2: ans3
    },
    optionalExpenses: {},
    income: [],
    savings: false
};
console.log("ответ на 1вопрос:", appData.expenses.otv1, "ответ на 2вопрос:", appData.expenses.otv2);
console.log(appData.budget);
console.log(appData.timeData);
console.log(appData.savings);

//  ------------------------5------------------------
alert("by oy kunlik topgan pulingiz" +((appData.budget-appData.expenses.otv2)/30));