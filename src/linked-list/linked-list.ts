import { LinkedListI } from './linked-list.interface';
import NodeElement from './node-list';

export default class LinkedList implements LinkedListI {
  head: any
  tail: any
  size: number

  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  isEmpty(): boolean {
    return this.size === 0
  }
  sizeOfList(): number {
    return this.size
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

  removeElement(element: any): any {
    let current = this.head
    let prev = null;

    while (current !== null) {
      if (current.node == element) {
        if (prev == null) {
          this.head = current.next
        } else {
          prev.next = current.next
        }
        this.size -= 1
        return current.node
      }
      prev = current;
      current = current.next;
    }
    return - 1
  }
  //TODO add another type of search this is O(N)
  indexOf(element: any): any {
    let current = this.head
    let index = 0;

    while (current !== null) {
      if (current.node == element) {
        return index;
      }
      index += 1;
      current = current.next;
    }
    return - 1
  }
  
  toString(): string {

    var current = this.head
    var string = JSON.stringify(this.head.node) + ' ';

    while (current.next) {
      current = current.next;
      string += JSON.stringify(current.node) + ' ';
    }

    return string;
  }

}