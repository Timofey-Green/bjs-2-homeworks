"use strict";



function solveEquation(a, b, c) {
  let discriminant = Math.pow(b, 2) - 4 * a * c;


  let arr = [];

  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    return [root];
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  }
}




function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let body = amount - contribution;
  if (body <= 0) return 0; //  Если первоначальный взнос больше или равен сумме всего кредита, то ничего не выводим

  let percentMonth = (percent / 100) / 12; //переводим в месячную ставку

   // рассчет ежемесячного платежа
  let monthlyFee = body * (percentMonth * Math.pow(1 + percentMonth, countMonths)) / (Math.pow(1 + percentMonth, countMonths) - 1);


  let sum = monthlyFee * countMonths + contribution;  // общая сумма кредита

  return Number(sum.toFixed(2));  //отсекаем лишние цифры после запятой
}