// -------------Longest common prefix-----------

// var longestCommonPrefix = function(strs) {
//     if (!strs.length) return '';
//     let prefix = '';
//     let maxPrefixLength = Math.min(...strs.map(str => str.length));
//     // console.log(strs[0][4]);
//     for(let i=0; i<maxPrefixLength; i++)
//     {
//         let charac = strs[0][i];
//         if(strs.every(str => str[i] === charac)){
//             prefix += charac;
//         }else{
//             break;
//         }
//     }
//     return prefix
// };

// strs = ['flower', 'flow', 'flight'];
// res = longestCommonPrefix(strs)
// console.log(res);

// --------------------------------------------------------------------------------------

// --------------Valid Paranthesis----------------------
// var validParanthesis = (s) =>{
//     const stack = [];
//     for(let i=0;i<s.length;i++){
//         let c = s.charAt(i);
//         switch(c){
//             case '(' : stack.push(')');
//                 break;
//             case '{' : stack.push('}');
//                 break;
//             case '[' : stack.push(']');
//                 break;
//             default:
//                 if(c !== stack.pop()){
//                     return false;
//                 } 
//         }
//     }
//     return stack.length === 0;
// }

// var res = validParanthesis("({[})]");
// console.log(res);

// ----------------------------------------------------------------------------------------------------------------

// ------------------sum of two linked lists------------------------
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//  var addTwoNumbers = function(l1, l2) {
//     var list = new ListNode(0);
//     let current1 = l1;
//     let current2 = l2;
//     let current3 = list;
//     var sum = 0;
//     var carry = 0;
    
//     while (current1 != null || current2 != null || sum>0){
//         if(current1 != null){    
//             sum = sum + current1.val;
//             current1 = current1.next;
//         }
//         if(current2 != null) {
//             sum = sum + current2.val;
//             current2 = current2.next;
//         }
//         if(sum>=10) {    
//             sum = sum - 10;
//             carry = 1;
//         }
//         current3.next = new ListNode(sum);
//         current3 = current3.next;
//         sum = carry;
//         carry = 0;
//     }
//     return list.next;
// };

// --------------------------------------------------------------------------------------