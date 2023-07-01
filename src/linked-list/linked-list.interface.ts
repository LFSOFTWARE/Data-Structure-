export interface LinkedListI {
  add(value: any): void
  insertAt(index: number, element: any): void 
  removeAt(index: number): void
  removeElement(element: any): any
  toString(): string
  indexOf(element: any): any 
  isEmpty(): boolean
  sizeOfList(): number
}