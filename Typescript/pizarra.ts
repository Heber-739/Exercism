export class Triangle {
  private isTriangle: boolean;
  private sides: number[] = [];

  constructor(a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || b <= 0) {
      this.isTriangle = false;
    } else {
      if (a + b >= c && b + c >= a && c + a >= b) {
        this.isTriangle = true;
      } else {
        this.isTriangle = false;
      }
    }
    this.sides = [a, b, c];
  }

  get isEquilateral(): boolean {
    return this.isTriangle
      ? this.sides[0] == this.sides[1] && this.sides[0] == this.sides[2]
      : false;
  }

  get isIsosceles(): boolean {
    return this.isTriangle
      ? this.sides[0] == this.sides[1] ||
          this.sides[0] == this.sides[2] ||
          this.sides[1] == this.sides[2]
      : false;
  }

  get isScalene() {
    return this.isTriangle
      ? this.sides[0] != this.sides[1] &&
          this.sides[0] != this.sides[2] &&
          this.sides[1] != this.sides[2]
      : false;
  }
}
const tr: Triangle = new Triangle(2, 4, 7);
console.log(tr.isScalene);
