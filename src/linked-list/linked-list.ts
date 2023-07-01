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
    }
    this.size += 1
  }

  insertAt(index: number, element: any): void {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of range")
    } else {
      const node = new NodeElement(element);

      let current = this.head
      let prev

      if (index === 0) {
        node.next = this.head
        this.head = node

      } else {
        current = this.head

        let i = 0;

        while (i < index) {
          i++
          prev = current;
          current = current.next;
        }
        prev.next = node
        node.next = current

      }
      this.size += 1
    }
  }
  removeAt(index: number): void {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of range")
    } else {

      let current = this.head
      let prev

      if (index === 0) {
        this.head = this.head.next

      } else {
        current = this.head

        let i = 0;

        while (i < index) {
          i++
          prev = current;
          current = current.next;
        }
        prev.next = current.next
      }
      this.size -= 1
      return current.node
    }
  }
  toString(): string {

    var current = this.head
    var string = JSON.stringify(this.head.node) + '-';

    while (current.next) {
      current = current.next;
      string += JSON.stringify(current.node) + '-';
    }

    return string;
  }
}