var lengthOfLastWord = function(s) {
    let count = 0
    let c = 0
    let i = s.length -1 
        while(s[i].toUpperCase() === s[i].toLowerCase()){
           
            i--
            c++
        }
        
        for(i = s.length - 1 - c; i > -1; i--){
            
            if(s[i] === ' '){
                break
            }
            count++
        }
        
    return count
};
