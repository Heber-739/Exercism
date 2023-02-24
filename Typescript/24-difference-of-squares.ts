export class Squares {
  private base: number;

  constructor(count: number) {
    this.base = count;
  }

  get sumOfSquares(): number {
    let sum: number = 0;
    for (let i = 1; i <= this.base; i++) {
      sum += i ** 2;
    }
    return sum;
  }

  get squareOfSum(): number {
    let sum: number = 0;
    for (let i = 1; i <= this.base; i++) {
      sum += i;
    }
    return sum ** 2;
  }

  get difference(): number {
    return Math.abs(this.sumOfSquares - this.squareOfSum);
  }
}
const squares = new Squares(5);
console.log(squares.difference);
