// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
//  }

// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');

// a.next = b;
// b.next = c;
// c.next = d;

// const printLinkedList = (head) => {
//     let current = head;
//     while (current != null){
//         console.log(current.val);
//         current = current.next;
//     }
// };

// printLinkedList(a);

// const searchLinkedList = (head, target) => {
//     let current = head;
//     while(current != null){
//         if(current.val == target){
//             return true;
//         }
//         current = current.next;
//     }
//     return false;
// }

// const searchLinkedList = (head, target) => {
//     if(head.val == target) return true;
//     if(head.val != target) return false;
//     return searchLinkedList(head.next, target);
// }

// -------------------------------------------------------------------------------------------------------------

// ---------------------DEPTH FIRST SEARCH------------------------------
// >>----------------------USING Iterative Approach-------------------------
// const depthFirstPrint = (graph, source) => {
//     const stack = [source];

//     while(stack.length > 0){
//         const current = stack.pop();
//         console.log(current);

//         for(let neighbor of graph[current]){
//             stack.push(neighbor);
//         }
//     }
// };

// const graph = {
//     a: ['c', 'b'],
//     b: ['d'],
//     c: ['e'],
//     d: ['f'],
//     e: [],
//     f: []
// };

// depthFirstPrint(graph, 'a');

// -------------------------------------------------------------------------
// >>----------------------USING RECURSIVE METHOD---------------------------
// const depthFirstPrintRec = (graph, source) => {
//     console.log(source);

//     for(let neighbor of graph[source]){
//         depthFirstPrintRec(graph, neighbor);
//     }
// };

// const graph = {
//     a: ['c', 'b'],
//     b: ['d'],
//     c: ['e'],
//     d: ['f'],
//     e: [],
//     f: []
// };

// depthFirstPrint(graph, 'a');
// ---------------------------------------------------------------------------------------------------------

// ---------------------BREADTH FIRST SEARCH------------------------------
// >>----------------------USING Iterative Approach-------------------------
// const breadthFirstPrint = (graph, source) => {
//     const queue = [source];

//     while(queue.length > 0){
//         const current = queue.shift(); //removes first elements from array
//         console.log(current);

//         for(let neighbor of graph[current]){
//             queue.push(neighbor);
//         }
//     }
// };

// const graph = {
//     a: ['c', 'b'],
//     b: ['d'],
//     c: ['e'],
//     d: ['f'],
//     e: [],
//     f: []
// };

// breadthFirstPrint(graph, 'a');

// -------------------------------------------------------------------------