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

// -----------------------------------------------------------------------------------------------------------

// -------------------HAS PATH USING BFS----------------------------------
// const breadthFirstHasPath = (graph, source, dest) => {
//     const queue = [source];

//     while(queue.length > 0){
//         const current = queue.shift(); //removes first elements from array
//         if (current == dest) return true;

//         for(let neighbor of graph[current]){
//             queue.push(neighbor);
//         }
//     }
//     return false;
// };

// const graph = {
//     a: ['c', 'b'],
//     b: ['d'],
//     c: ['e'],
//     d: ['f'],
//     e: [],
//     f: []
// };

// breadthFirstHasPath(graph, 'a', 'f');

// ---------------------------------------------------------------------------------------------------------

// >>----------------------HAS PATH USING DFS RECURSIVE METHOD---------------------------
// const depthFirstHasPath = (graph, source) => {
//     if (source == dest) return true;

//     for(let neighbor of graph[source]){
//         if (depthFirstHasPath(graph, neighbor, dest) == true) {
//             return true;
//         }
//     }
//     return false;
// };

// const graph = {
//     a: ['c', 'b'],
//     b: ['d'],
//     c: ['e'],
//     d: ['f'],
//     e: [],
//     f: []
// };

// depthFirstHasPath(graph, 'a', 'f);
// ---------------------------------------------------------------------------------------------------------

// ------------------------Node search in a cyclic graph (DFS)---------------------------
// const searchNodeUndirectedGraph = (edges, nodeA, nodeB) => {
//     const graph = buildGraph(edges);
//     return hasPath(graph, nodeA, nodeB, new Set());
// }

// const buildGraph = (edges) => {
//     const graph = {};

//     for (let edge of edges){
//         const[a,b] = edge;
//         if(!(a in graph)) graph[a] = [];
//         if(!(b in graph)) graph[b] = [];
//         graph[a].push(b);
//         graph[b].push(a);
//     }
//     return graph;
// }

// const hasPath = (graph, source, destination, visited) => {
//     if(source == destination) {
//         return true;
//     }

//     if(visited.has(source)) return true;

//     visited.add(source);

//     for(let neighbor of graph[source]){
//         if(hasPath(graph, neighbor, destination, visited) == true) return true;
//     }
//     return false;
// }


// const edges = [
//     ['i', 'j'],
//     ['k', 'i'],
//     ['m', 'k'],
//     ['k', 'l'],
//     ['o', 'n'],
// ];

// const result = searchNodeUndirectedGraph(edges, 'j', 'm');
// console.log(result);

// ----------------------------------------------------------------------------------------------------------------------------------

// ---------------------counting connected components----------------------------
const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0;
     
    for (let node in graph) {
        console.log(visited);
        if(explore(graph, node, visited) == true) {
            count += 1;
        }
    }

    return count;
};

const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return false;

    visited.add(String(current));

    for(let neighbor of graph[current]){
        explore(graph, neighbor, visited);
    }

    return true;
};

const res = connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
});

// console.log(res)