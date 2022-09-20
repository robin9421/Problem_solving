// const tree = {
//     name: 'Robin',
//     children: [
//         {
//             name: 'Kanika',
//             children: []
//         },
//         {
//             name: 'Jill',
//             children: [
//                 {
//                     name: 'Priyanka',
//                     children:[]
//                 },
//                 {
//                     name: 'Shakshi',
//                     children: []
//                 }
//             ]
//         }
//     ]
// };

// const printRecursiveChildren = (t) => {
//     if (t.children.length === 0) {
//         return
//     }
//     t.children.forEach(child => {
//         console.log(child.name)
//         printRecursiveChildren(child)
//     });
// };

// printRecursiveChildren(tree)
// -------------Tracking output----------------
// printRecursiveChildren('Robin')
//     printRecursiveChildren('Kanika')
//     return
//     printRecursiveChildren('Jill')
//         printRecursiveChildren('Priyanka')
//         return
//         printRecursiveChildren('Shakshi')
//         return
//     return
// return
          
