//Using Brute Force algorithm

var lengthOfLongestSubstring = function(s) {
    const hasSeq = new Set();
    let res = 0;
    let count = 0;
    let start = 0;
      
    for(let i= 0; i< s.length; i++) {
        if(hasSeq.has(s[i])){
            
            if(res < count){
                res = count;
            }
            count = 0;
            hasSeq.clear();
            start = start + 1;
            i = start;
        
        }
        
        hasSeq.add(s[i])
        count++;
        if(res < count){
                res = count;
        }
    }
    return res;
}; 

// Using Sliding Window Algorithm
