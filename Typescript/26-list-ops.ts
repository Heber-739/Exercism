export class List<T> {
  private list: T[] = [];

  constructor(...values: any[]) {
    let arr: T[] = this.list;
    values.forEach((e) => {
      if (e.list) {
        for (let i = 0; i < e.list.length; i++) {
          arr.push(e.list[i]);
        }
      } else {
        arr.push(e);
      }
    });
  }

  public static create(...values: any[]) {
    return new List(...values);
  }
  public forEach(f: (n: T) => void) {
    return this.list.forEach(f);
  }
  public length(): number {
    let l: number = 0;
    this.list.forEach((e) => l++);
    return l;
  }

  public append(value: List<T>): List<T> {
    console.log(typeof value);
    value.list.forEach((e) => this.list.push(e));
    return this;
  }

  public concat(...values: List<T>[]): List<T> {
    values.forEach((e) => this.append(e));
    return this;
  }

  public filter<U>(f: (n: T) => boolean) {
    let arr = List.create();
    for (let index = 0; index < this.list.length; index++) {
      if (f(this.list[index])) {
        arr.list.push(this.list[index]);
      }
    }
    return arr;
  }
  public map<U>(f: (n: T) => void) {
    let arr = List.create();
    for (let i = 0; i < this.list.length; i++) {
      arr.list[i] = f(this.list[i]);
    }
    return arr;
  }
  public reverse() {
    let re = List.create();
    this.list.forEach((e) => re.list.unshift(e));
    return re;
  }
  public foldl<V, U>(f: (n: T, l: T) => T, init: T) {
    let result: T = init;
    for (const el of this.list) {
      result = f(result, el);
    }
    return result;
  }
  public foldr<V, U>(f: (n: T, l: T) => T, init: T) {
    let result: T = init;
    for (let i = this.list.length - 1; i >= 0; i--) {
      const e = this.list[i];
      result = f(result, e);
    }
    return result;
  }
}

/* const list1 = List.create(1, 2, 2, 3, 4, 5);
  list1.filter<number>((el) => el % 2 === 1); */
console.log(new List(1, 2, 3));
const list1 = List.create(1, 2);
const list2 = List.create(2, 3, 4, 5);
let list3 = list1.append(list2);
list3.reverse();
