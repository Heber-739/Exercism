export class Rational {
  private num: number;
  private den: number;
  constructor(numerator: number, denominator: number) {
    this.num = numerator;
    this.den = denominator;
  }

  public add(a: number, b: number): Rational {
    if (this.den === b) {
      return this.reduce(new Rational(this.num + a, b));
    }
    return this.reduce(new Rational(this.num * b + this.den * a, this.den * b));
  }

  public sub(a: number, b: number) {
    if (this.den === b) {
      return this.reduce(new Rational(this.num - a, b));
    }
    return this.reduce(new Rational(this.num * b - this.den * a, this.den * b));
  }

  public mul(a: number, b: number) {
    return this.reduce(new Rational(this.num * a, this.den * b));
  }

  public div(a: number, b: number) {
    return this.reduce(new Rational(this.num * b, this.den * a));
  }

  public abs() {
    this.num = this.num < 0 ? this.num * -1 : this.num;
    this.den = this.den < 0 ? this.den * -1 : this.den;
    return new Rational(this.num, this.den);
  }

  public exprational() {
    throw new Error("Remove this statement and implement this function");
  }

  public expreal() {
    throw new Error("Remove this statement and implement this function");
  }

  private reduce(rat: Rational): Rational {
    if (rat.num % rat.den === 0 || rat.den % rat.num === 0) {
      return rat.num % rat.den === 0
        ? new Rational(rat.num / rat.den, 1)
        : new Rational(1, rat.den / rat.num);
    }
    let gcd = (a: number, b: number, reverse: boolean): Rational => {
      for (let i = a - 1; i > 0; i--) {
        if (a % i === 0 && b % i === 0) {
          if (reverse) {
            return new Rational(b / i, a / i);
          }
          return new Rational(a / i, b / i);
        }
      }
      return rat;
    };
    return rat.num > rat.den
      ? gcd(rat.num, rat.den, false)
      : gcd(rat.den, rat.num, true);
  }
}
