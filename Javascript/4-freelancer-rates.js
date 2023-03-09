export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  let perHour = dayRate(ratePerHour);
  return Math.floor(budget / perHour);
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let months = Math.trunc(numDays / 22);
  let total = dayRate(ratePerHour) * numDays;
  let totalMonths = dayRate(ratePerHour) * 22 * months;
  return Math.ceil(total - totalMonths * discount);
}
console.log(priceWithMonthlyDiscount(89, 230, 0.42));
/* 
  priceWithMonthlyDiscount(89, 230, 0.42);
  // => 97972
   */
