export function totalBirdCount(birdsPerDay) {
  let count = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    count += birdsPerDay[i];
  }
  return count;
}

export function birdsInWeek(birdsPerDay, week) {
  let arr = birdsPerDay.splice(7 * (week - 1), 7);
  return totalBirdCount(arr);
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    birdsPerDay[i] = i % 2 == 0 ? ++birdsPerDay[i] : birdsPerDay[i];
  }
  return birdsPerDay;
}
birdsPerDay = [2, 5, 0, 7, 4, 1];
console.log(fixBirdCountLog(birdsPerDay));
// => [3, 5, 1, 7, 5, 1]
