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

// --------------------------------------------------------------------------------------
