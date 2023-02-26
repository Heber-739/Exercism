export function steps(count: number): number {
  let steps: number = 0;
  if (count < 0) {
    throw new Error("Only positive numbers are allowed");
  }
  while (count != 1) {
    count = count % 2 == 0 ? count / 2 : 3 * count + 1;
    steps++;
  }
  return steps;
}
console.log(steps(12));
