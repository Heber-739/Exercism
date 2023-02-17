export class Clock {
  private minuts: number;
  private hours: number;

  constructor(hour: number, minute?: number) {
    this.minuts = 0;
    let mins = minute || 0;
    this.hours = hour < 0 ? 24 - (Math.abs(hour) % 24) : hour % 24;
    mins >= 0 ? this.plus(mins) : this.minus(mins);
  }

  public toString(): string {
    let hours: string = this.hours < 10 ? `0${this.hours}` : `${this.hours}`;
    let minuts: string =
      this.minuts < 10 ? `0${this.minuts}` : `${this.minuts}`;
    return `${hours}:${minuts}`;
  }

  public plus(minutes: number): Clock {
    console.log(this.hours);

    while (minutes >= 60) {
      minutes = minutes - 60;
      console.log(this.hours);
      this.hours++;
      this.hours = this.hours % 24;
    }
    if (this.minuts + minutes >= 60) {
      this.hours++;
      this.minuts = minutes + this.minuts - 60;
      this.hours = this.hours % 24;
      return this;
    }
    this.minuts = minutes + this.minuts;
    return this;
  }

  public minus(minut: number): Clock {
    let minutes: number = minut >= 0 ? minut : Math.abs(minut);
    while (minutes >= 60) {
      minutes = minutes - 60;
      this.hours--;
      this.hours = this.hours < 0 ? 24 + this.hours : this.hours % 24;
    }
    if (this.minuts < minutes) {
      this.hours--;
      minutes = minutes - this.minuts;
      this.minuts = 60 - minutes;
      this.hours = this.hours < 0 ? 24 + this.hours : this.hours % 24;
      return this;
    }
    this.minuts = this.minuts - minutes;
    return this;
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString();
  }
}
