export class ComplexNumber {
  private r: number;
  private i: number;
  constructor(real: number, imaginary: number) {
    this.r = real;
    this.i = imaginary;
  }

  public get real(): number {
    return this.r;
  }

  public get imag(): number {
    return this.i;
  }

  public add(c: ComplexNumber): ComplexNumber {
    this.r += c.real;
    this.i += c.imag;
    return this;
  }

  public sub(c: ComplexNumber): ComplexNumber {
    this.r -= c.real;
    this.i -= c.imag;
    return this;
  }

  public div(c: ComplexNumber): ComplexNumber {
    let m: number = c.real ** 2 + c.imag ** 2;
    let r: number = this.r * c.real + this.i * c.imag;
    let i: number = this.i * c.real - this.r * c.imag;
    return new ComplexNumber(r / m, i / m);
  }

  public mul(c: ComplexNumber): ComplexNumber {
    let r: number = this.r * c.real - this.i * c.imag;
    let i: number = this.i * c.real + this.r * c.imag;
    return new ComplexNumber(r, i);
  }

  public get abs(): number {
    return Math.sqrt(this.r ** 2 + this.i ** 2);
  }

  public get conj(): ComplexNumber {
    return new ComplexNumber(this.real, this.i == 0 ? 0 : -this.i);
  }

  public get exp(): ComplexNumber {
    let r: number = Math.cos(this.i) * Math.E ** this.r;
    let i: number = Math.sin(this.i) * Math.E ** this.r;
    return new ComplexNumber(r, i);
  }
}

/* 
  El recíproco de un número complejo distinto de cero es 1 / (a + i * b) = a/(a^2 + b^2) - b/(a^2 + b^2) * i.
  Elevar e a un exponente complejo se puede expresar como
  e^(a + i * b) = e^a * e^(i * b), cuyo último término viene dado por la fórmula de Euler
  e^(i * b) = cos(b) + i * sin(b).
  
   */
