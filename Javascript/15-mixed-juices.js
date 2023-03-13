export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
      return 1.5;
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;

    default:
      return 2.5;
  }
}

export function limesToCut(wedgesNeeded, limes) {
  let count = 0;
  for (let i = 0; i < limes.length; i++) {
    const e = limes[i];
    if (e == "small") {
      count += 6;
    } else if (e == "medium") {
      count += 8;
    } else if (e == "large") {
      count += 10;
    }
    if (count >= wedgesNeeded) {
      return wedgesNeeded == 0 ? 0 : i + 1;
    }
  }
  return limes.length;
}

export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  }
  return orders;
}
const limes = ["small", "large", "large", "medium", "small", "large", "large"];
console.log(limesToCut(80, limes));
