import LinkedList from "./linked-list/linked-list";


const linkedList = new LinkedList()

const nodeA = 1
const nodeB = 2
const nodeC = 3


linkedList.add(nodeA)
linkedList.add(nodeB)
linkedList.add(nodeC)

console.log(linkedList.toString())


// linkedList.insertAt(1, 8)

console.log("Removed", linkedList.removeAt(1))

console.log(linkedList.toString())
