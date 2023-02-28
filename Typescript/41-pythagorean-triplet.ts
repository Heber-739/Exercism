type Options = {
  minFactor?: number;
  maxFactor?: number;
  sum: number;
};

export function triplets(op: Options): Triplet[] {
  let min: number = op.minFactor ? op.minFactor : 0;
  let max: number = op.maxFactor ? op.maxFactor : op.sum;
  let arr: Triplet[] = [];
  for (let i = min; i <= max - 2; i++) {
    for (let j = i + 1; j < max - 1; j++) {
      for (let k = j + 1; k < max; k++) {
        if (i + j + k === op.sum) {
          if (i ** 2 + j ** 2 == k ** 2) {
            arr.push(new Triplet(i, j, k));
          }
        }
      }
    }
  }
  return arr;
}

class Triplet {
  private arr: [number, number, number];
  constructor(a: number, b: number, c: number) {
    this.arr = [a, b, c];
  }

  toArray(): [number, number, number] {
    return this.arr;
  }
}
