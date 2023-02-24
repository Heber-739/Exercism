export class Gigasecond {
  public dateTime: Date;
  constructor(date: Date) {
    this.dateTime = date;
  }

  public date() {
    let giga: number = 1000000000;
    let da: Date = new Date(
      Date.UTC(
        this.dateTime.getFullYear(),
        this.dateTime.getMonth(),
        this.dateTime.getDate(),
        this.dateTime.getHours(),
        this.dateTime.getMinutes(),
        this.dateTime.getSeconds() + giga
      )
    );
    return da;
  }
}
const gs = new Gigasecond(new Date(Date.UTC(2015, 8, 14)));
console.log(gs.date());
