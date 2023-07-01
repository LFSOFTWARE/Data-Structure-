import  NodeElement  from './node-list';

export default class LinkedList {
  head: any;
  tail: any;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  add(element: any): void {
    const node = new NodeElement(element);
  }
}