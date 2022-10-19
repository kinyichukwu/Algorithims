var strStr = function(haystack, needle) {
    if(haystack.length < needle.length){
        return -1
    }
    
    for(i = 0; i < haystack.length + 1 - needle.length; i++){
        let p1 = i
        let p2 = i + needle.length - 1
        if(haystack[p1] === needle[0] &&
        haystack[p2] === needle[needle.length - 1]){
            if(haystack.slice(p1,p2 + 1) === needle){
                return p1
            }
            
        }
       
    }
    return -1
   
};
