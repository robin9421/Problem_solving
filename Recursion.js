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
          
// ----------------------------------------------------------------------------

// ------------------String Reversal--------------------------
// const stringReversal = (strng) => {
//     if(strng == ""){
//         return "";
//     }
//     return stringReversal(strng.substring(1)) + strng.charAt(0);
// }

// res = stringReversal("Robin");
// console.log(res)

// ---------------------------------------------------------------------------------