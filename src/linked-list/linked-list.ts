import NodeElement from './node-list';

export default class LinkedList {
  head: any
  tail: any
  size: number

  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  add(element: any): void {
    const node = new NodeElement(element);
    let current

    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      
      while (current.next) {
        current = current.next
      }

      current.next = node
      this.size += 1
    }
  }

  toString(): string {
    
    var current = this.head
    var string = '';

    while(current.next) {
      string += String(current.node) + '-'
    }

    return string;
  }
}