// var lengthOfLongestSubstring = function(s) {
//     const hasSeq = new Map();
//     let maxLength = 0;
   
//     for(let right= 0, left = 0; right< s.length; right++) {
//         let current = s[right]
//         if(hasSeq.has(current) && hasSeq.get(current) >= left){
//             left = hasSeq.get(current) + 1;
//         }
//         maxLength = Math.max(maxLength, right - left + 1);
//         hasSeq.set(s[right], right);
//     }
//     return maxLength;
// }; 

var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
   
    for(let right= 0, left = 0; right< s.length; right++) {
       let index = s.indexOf(s.charAt(right), left);
        if(index != right) {
            left = index + 1;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}; 
