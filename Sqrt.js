var mySqrt = function(x) {
    if(x==0){return x;}; //base case
    
    let l = 1, r=x; //initialize binary search indices
    let guess = Math.floor((l+r)/2); //Thanks javascript, but i need an integer
    
    while(l <= r){
        if(Math.pow(guess,2) == x){ //our guess is just right
            break;
        }else if(Math.pow(guess,2) < x && Math.pow(guess+1,2) < x){ //our guess is too small
            l = guess;
        }else if(Math.pow(guess,2) > x){ //our guess is too large
            r= guess;
        }else if(Math.pow(guess,2) < x && Math.pow(guess+1,2) >= x){
            //the next guess overshoots or is correct. If its correct, return the next. If overshoots, we will choose the "undershoot" instead as the truncated int
            if(Math.pow(guess+1,2) == x){
                guess++;
            }
            break;
        }
        guess = Math.floor((l+r)/2);
    }
    
    return guess;
};

Binary search 
