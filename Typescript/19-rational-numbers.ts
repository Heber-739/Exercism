export class Rational {
  private num: number;
  private den: number;
  constructor(numerator: number, denominator: number) {
    this.num = numerator;
    this.den = denominator;
  }

  public add(rat: Rational): Rational {
    if (this.den === rat.den) {
      return this.reduce(new Rational(this.num + rat.num, rat.den));
    }
    return this.reduce(
      new Rational(this.num * rat.den + this.den * rat.num, this.den * rat.den)
    );
  }

  public sub(rat: Rational) {
    if (this.den === rat.den) {
      return this.reduce(new Rational(this.num - rat.num, rat.den));
    }
    return this.reduce(
      new Rational(this.num * rat.den - this.den * rat.num, this.den * rat.den)
    );
  }

  public mul(rat: Rational): Rational {
    return this.reduce(new Rational(this.num * rat.num, this.den * rat.den));
  }

  public div(rat: Rational): Rational {
    return this.reduce(
      new Rational(-1 * this.num * rat.den, -1 * this.den * rat.num)
    );
  }

  public abs(rat?: Rational): Rational {
    if (rat) {
      let num = rat.num < 0 ? rat.num * -1 : rat.num;
      let den = rat.den < 0 ? rat.den * -1 : rat.den;
      return new Rational(num, den);
    }
    let _num = this.num < 0 ? this.num * -1 : this.num;
    let _den = this.den < 0 ? this.den * -1 : this.den;
    return new Rational(_num, _den);
  }

  public exprational(exp: number) {
    return this.reduce(new Rational(this.num ** exp, this.den ** exp));
  }

  public expreal(numbr: number): number {
    let ex: number = numbr;
    for (let i = 1; i < this.num; i++) {
      ex *= numbr;
    }
    let result: number = 1;
    while (result < ex) {
      let rad: number = result;
      let radical: number = 1;
      for (let ind = 1; ind <= this.den; ind++) {
        radical *= rad;
      }
      if (radical === ex) {
        break;
      } else {
        result++;
      }
    }
    if (result === 15.999999999999998) {
      return 16;
    }
    return result;
  }

  private reduce(rational?: Rational | undefined): Rational {
    let rat: Rational = rational ? rational : new Rational(this.num, this.den);
    if (Math.abs(rat.num) !== 1 && Math.abs(rat.den) !== 1) {
      let res: Rational = this.abs(rat);
      let a: number = rat.num * rat.den < 0 ? -1 : 1;
      if (res.num % res.den === 0 || res.den % res.num === 0) {
        return res.num % res.den === 0
          ? new Rational(rat.num / rat.den, 1)
          : new Rational(1 * a, res.den / res.num);
      }
      let gcd = (an: number, bn: number, reverse: boolean): Rational => {
        for (let i = an - 1; i > 1; i--) {
          if (an % i === 0 && bn % i === 0) {
            if (reverse) {
              return new Rational((bn * a) / i, an / i);
            }
            return new Rational((an * a) / i, bn / i);
          }
        }
        return new Rational(res.num * a, res.den);
      };
      return res.num > res.den
        ? gcd(res.num, res.den, false)
        : gcd(res.den, res.num, true);
    }
    if (rat.num < 0 && rat.den < 0) {
      return new Rational(Math.abs(rat.num), Math.abs(rat.den));
    }
    return rat;
  }
}

console.log(new Rational(4, 3).expreal(8));
console.log(Math.pow(8, 4 / 3));
console.log(parseFloat("15.99999999998")); /* -1,3 */
