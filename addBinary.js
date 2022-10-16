// var addBinary = function(a, b) {
//     return (BigInt(`0B${a}`) + BigInt(`0B${b}`)).toString(2)
// };

var addBinary = function(a, b) {
    let res = ""; 
    let i = a.length - 1; 
    let j = b.length - 1; 
    let carry = 0; 
    
    while(i >= 0 || j >= 0 || carry > 0){ 
        let sum = carry; 
        if(i >= 0) sum += a.charAt(i--) - '0';
        if(j >= 0) sum += b.charAt(j--) - '0';
            
        carry = sum > 1 ? 1 : 0;
        res = (sum % 2) + res; 
    }
    return res.toString();
};