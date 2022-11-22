var reverse = function(x) {
    
    let negative = 1
    if(x < 0){
        negative = negative * -1
        x = x * -1
    }
    x = x + ""
    
    let array = x.split('')
    
    let numberOfZeros = 0
    let whileLoopCounter = array.length - 1
    while(array[whileLoopCounter] === "0" && whileLoopCounter > -1){
        numberOfZeros = numberOfZeros + 1
        whileLoopCounter = whileLoopCounter - 1
    }
    let newString = ''
    for(i = array.length - 1 - numberOfZeros; i > -1; i--){
        newString = newString + array[i]
    }
    
    newString = newString - 0
    newString = newString * negative
    
   console.log(newString)

   if(newString > 2147483648){
        return 0
    }

    if(newString < -2147483648){
        return 0
    }
    return newString
};
