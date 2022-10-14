// var plusOne = function(digits) {
//   for(let i = digits.length - 1; i >= 0; i --){
//     if(digits[i] === 9){
//       digits[i] = 0;
//     }
//     else {
//       digits[i] ++;
//       return digits;
//     }
//   }
//   return [1, ...digits];
// };

// -------My Sol-------------
var plusOne = function(digits) {
    let res = [];
    let sum = 1;
    let carry = 0;
    let i = digits.length-1;
    while(i>=0 || sum > 0){
        let digit = i<0 ? 0 : digits[i]; 
        sum = sum + digit;
        if(sum == 10){
            sum = 0;
            carry = 1;
        }
        res.unshift(sum);
        sum = carry;
        carry = 0;
        i--;
    }
    return res;
};
