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

// ---------------------Fibonacci (Non optimized)---------------)
// const Fibonacci = (num) => {
//     if(num == 0 || num == 1)
//     {
//         return num;
//     }
//     return Fibonacci(num-1) + Fibonacci(num-2);
// }

// res = Fibonacci(6);
// console.log(res);

// ---------------------------------------------------------------------------------------

// -------------------Merge two sorted lists------------------------
// var mergeTwoLists = function(list1, list2) {
//     if(list1 == null){
//         return list2;
//     }
//     if(list2 == null){
//         return list1;
//     }
//     if(list1.val < list2.val){
//         list1.next = mergeTwoLists(list1.next, list2);
//         return list1;
//     }
//     else {
//         list2.next = mergeTwoLists(list1, list2.next);
//         return list2;
//     }
// };

// ---------------------------------------------------------------------------------------------