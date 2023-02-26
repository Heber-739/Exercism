export class Allergies {
  private values: { [key: number]: string } = {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawberries",
    16: "tomatoes",
    32: "chocolate",
    64: "pollen",
    128: "cats",
  };
  private all: string[] = [];
  constructor(a: number) {
    let keys: string[] = Object.keys(this.values).reverse();
    let r: number = 10;
    while (r > 7) {
      a -= a > 2 ** r ? 2 ** r : 0;
      r--;
    }
    keys.forEach((e) => {
      if (a >= parseInt(e)) {
        a -= parseInt(e);
        this.all.unshift(this.values[+e]);
      }
    });
  }

  public list(): string[] {
    return this.all;
  }

  public allergicTo(a: string): boolean {
    return this.all.includes(a);
  }
}
const allergies = new Allergies(509);
const expected = [
  "eggs",
  "shellfish",
  "strawberries",
  "tomatoes",
  "chocolate",
  "pollen",
  "cats",
];
console.log(allergies.list());
