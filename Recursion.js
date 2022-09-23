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

// --------------------Palindrome-------------------------
// const isPalindrome = (strng) => {
//     if(strng.length == 0 || strng.length == 1){
//         return true;
//     }
//     if(strng.charAt(0) == strng.charAt(strng.length - 1))
//     {
//         return isPalindrome(strng.substring(1,strng.length-1));
//     }
//     return false;
// }

// res = isPalindrome("AKA");
// console.log(res)

// --------------------------------------------------------------------------------------


// ---------------------DecimalToBinary---------------------
// const DecimalToBinary = (number, result) => {
//     if(number == 0) {
//         return result;
//     }
//     conversion = (number % 2).toString()
//     // console.log(conversion);
//     result = conversion + result;
    
//     return DecimalToBinary(parseInt(number/2), result);
// }

// res = DecimalToBinary(520, "");
// console.log(res);

// -------------------------------------------------------------------------------------