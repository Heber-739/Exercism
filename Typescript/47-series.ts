export class Series {
  private text: string;
  constructor(t: string) {
    if (t.length == 0) {
      throw new Error("series cannot be empty");
    }
    this.text = t;
  }

  slices(n: number): Array<number | string>[] {
    if (n == 0 || n < 0) {
      throw new Error(
        n == 0
          ? "slice length cannot be zero"
          : "slice length cannot be negative"
      );
    }
    if (n > this.text.length) {
      throw new Error("slice length cannot be greater than series length");
    }
    let res: Array<number | string>[] = [];
    let index: number = this.text.length - (n - 1);
    console.log(index);
    for (let i = 0; i < index; i++) {
      console.log(
        this.text
          .slice(i, i + n)
          .split("")
          .map((x) => parseInt(x))
      );
      res.push(
        this.text
          .slice(i, i + n)
          .split("")
          .map((x) => parseInt(x))
      );
    }
    return res;
  }
}
const s = new Series("918493904243");
console.log("918493904243".length);
console.table(s.slices(5));
/* 
   expect().slices(5)).toEqual([
        [9, 1, 8, 4, 9],
        [1, 8, 4, 9, 3],
        [8, 4, 9, 3, 9],
        [4, 9, 3, 9, 0],
        [9, 3, 9, 0, 4],
        [3, 9, 0, 4, 2],
        [9, 0, 4, 2, 4],
        [0, 4, 2, 4, 3],
      ])
    })
     */
