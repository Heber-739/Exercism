export class Node {
  public info: any;
  public next: Node | null;
  public before: Node | null;
  constructor(info: any) {
    this.info = info;
    this.next = null;
    this.before = null;
  }
}

export class LinkedList<TElement> {
  private inicio: Node | null;
  private fin: Node | null;

  constructor() {
    this.inicio = null;
    this.fin = null;
  }

  private empty() {
    return this.inicio == null && this.fin == null ? true : false;
  }

  public push(element: TElement) {
    let node: Node = new Node(element);
    if (this.empty()) {
      this.inicio = node;
      this.fin = node;
    } else {
      this.fin!.next = node;
      node.before = this.fin;
    }
    this.fin = node;
  }

  public pop(): TElement {
    if (this.inicio == this.fin) {
      let au = this.inicio;
      this.inicio = this.fin = null;
      return au.info!;
    }
    let aux: Node = this.fin!;
    this.fin = this.fin!.before;
    this.fin!.next = null;
    aux.before = aux.next = null;
    return aux.info;
  }

  public shift(): TElement {
    let aux: Node = this.inicio!;
    this.inicio = this.inicio!.next;
    this.inicio!.before = null;
    aux.before = aux.next = null;
    return aux.info;
  }

  public unshift(element: TElement) {
    let node: Node = new Node(element);
    if (this.empty()) {
      this.inicio = node;
      this.fin = node;
    } else {
      node.next = this.inicio;
      this.inicio!.before = node;
    }
    this.inicio = node;
  }

  public delete(element: TElement) {
    if (this.inicio === this.fin) {
      return this.inicio!.info;
    }
    let aux: Node = this.inicio!;
    while (aux != null) {
      if (aux.info == element) {
        if (aux.next) {
          aux.before!.next = aux.next!.before;
        } else {
          aux.before!.next = null;
        }
      }
      aux = aux.next!;
    }
  }

  public count(): number {
    let i = this.inicio;
    let long: number = 1;
    while (i!.next) {
      long++;
      i = i?.next!;
    }
    return long;
  }
}
/* ----------------- Pruebas ------------------- */
const list = new LinkedList<number>();
list.push(10);
list.push(20);
console.log(list.pop());
list.pop(); /* (20) */
list.push(30);
list.shift(); /* (10) */
list.unshift(40);
list.push(50);
list.shift(); /* 40) */
list.pop(); /* 50) */
list.shift(); /* 30) */

/* [30,50] */

/*
ListaDoblementeEnlazada listita = new ListaDoblementeEnlazada();

        push( insertar valor al dorso );
pop( quitar valor al dorso );

shift( quitar valor al frente ).
unshift( insertar valor al frente );
         */
