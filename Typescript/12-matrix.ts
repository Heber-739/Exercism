export class Matrix {
  private rowsArray: number[];
  private columnsArray: number[];

  constructor(numbers: string) {
    let rowsAux: any = [];
    let columnsAux: any = [];

    let sep = numbers.split("\n");
    sep.forEach((e) => {
      let eN = e.split(" ");
      rowsAux.push(eN.map((x) => parseInt(x)));
    });
    this.rowsArray = rowsAux;
    let colNumber = rowsAux[0].length;

    let index = 0;
    while (index < colNumber) {
      let auxW: number[] = [];
      for (let ind = 0; ind < rowsAux.length; ind++) {
        auxW.push(rowsAux[ind][index]);
      }
      columnsAux.push(auxW);
      index++;
    }
    this.columnsArray = columnsAux;
  }

  get rows(): number[] {
    return this.rowsArray;
  }

  get columns(): number[] {
    return this.columnsArray;
  }
}
console.log(new Matrix("10 2\n3 4"));
