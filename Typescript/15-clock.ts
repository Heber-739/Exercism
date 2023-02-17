export class Clock {
  private minuts: number = 0;
  private hours: number = 0;

  constructor(hour: number, minute?: number) {
    this.minuts = minute || 0;
    this.hours = hour;
  }

  public toString(): string {
    let hours: string = this.hours < 10 ? `0${this.hours}` : `${this.hours}`;
    let minuts: string =
      this.minuts < 10 ? `0${this.minuts}` : `${this.minuts}`;
    return `${hours}:${minuts}`;
  }

  public plus(minutes: number): Clock {
    while (minutes >= 60) {
      minutes = minutes - 60;
      this.hours++;
    }
    if (this.minuts + minutes >= 60) {
      this.hours++;
      this.minuts = minutes + this.minuts - 60;
      return this;
    }
    this.minuts = minutes + this.minuts;
    return this;
  }

  public minus(minutes: number): Clock {
    while (minutes >= 60) {
      minutes = minutes - 60;
      this.hours--;
    }
    if (this.minuts <= minutes) {
      this.hours--;
      this.minuts = 60 - minutes;
      return this;
    }
    this.minuts = this.minuts - minutes;
    return this;
  }

  public equals(hour: number, minute?: number): Clock {
    return new Clock(hour, minute);
  }
}
