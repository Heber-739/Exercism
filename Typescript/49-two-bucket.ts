export class TwoBucket {
  private movs: number;
  private goalBucke: string;
  private otherBucke: number;

  constructor(c1: number, c2: number, goal: number, start: string) {
    /*        6           15             9                one*/
    let mov: number = 1;
    let st = start == "one" ? c1 : c2;
    let aux1: number = start == "one" ? c1 : c2;
    let aux2: number = start == "one" ? c2 : c1;
    let ot: number = 0;
    while (true) {
      console.log(st, ot);
      /*                   [5 0, 2 3, 2 0, 0 2, 5 2, 4 3, 4 0, 1 3]*/
      if (st == goal) {
        this.goalBucke = start == "one" ? "one" : "two";
        this.otherBucke = ot;
        break;
      }
      if (ot == goal) {
        this.goalBucke = start == "one" ? "two" : "one";
        this.otherBucke = st;
        break;
      }
      if (st == aux1 && ot == 0) {
        st = ot + aux1 > aux2 ? st - (aux2 - ot) : 0;
        ot = ot + aux1 > aux2 ? aux2 : ot + aux1;
      } else if (st == 0 && ot == aux2) {
        st = aux1;
      } else if (st == aux1 && ot < aux2 && ot > 0) {
        st = ot + aux1 > aux2 ? st - (aux2 - ot) : 0;
        ot = ot + aux1 > aux2 ? aux2 : ot + aux1;
      } else if (st < aux1 && st > 0 && ot == aux2) {
        ot = 0;
      } else if (st < aux1 && st > 0 && ot == 0) {
        let ap: number = st;
        st = ot + st > aux2 ? st - (aux2 - ot) : 0;
        ot = ot + ap > aux2 ? aux2 : ot + ap;
      } else if (st == 0 && ot < aux2) {
        st = aux1;
      } else if (st == aux1 && ot == aux2) {
        throw new Error("e");
      } else if (mov > 10) {
        throw new Error("d");
      }
      /*[5 0, 2 3, 2 0, 0 2, 5 2, 4 3, 4 0, 1 3]*/
      mov++;
    }
    this.movs = mov;
  }

  moves() {
    return this.movs;
  }

  get goalBucket() {
    return this.goalBucke;
  }

  get otherBucket() {
    return this.otherBucke;
  }
}
const tb = new TwoBucket(6, 15, 9, "two"); // 8
console.log(tb.moves(), tb.goalBucket, tb.otherBucket);

/* 6 15,
             [5 0, 2 3, 2 0, 0 2, 5 2, 4 3, 4 0, 1 3]
  */

/* 
        expect(twoBucket.moves()).toEqual(14)
        expect(twoBucket.goalBucket).toEqual('one')
        expect(twoBucket.otherBucket).toEqual(11)
  
        const starterBuck = 'two'
        expect(twoBucket.moves()).toEqual(18)
        expect(twoBucket.goalBucket).toEqual('two')
        expect(twoBucket.otherBucket).toEqual(7)
         */
