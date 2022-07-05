nums = [1,7,3,6,5,6]
let sum = 0
let reverseSum = 0
hashtable = {}
for(i = 0; i < nums.length; i++){
    sum = sum + nums[i]
    hashtable[sum] = i
    
}
// loop backwards and check if the addition at any time is equal to the stored data
for(i = nums.length - 1; i > -1; i--){
    reverseSum = reverseSum + nums[i]
    stringreverseSum = reverseSum + ''
    if(hashtable[stringreverseSum]){
        console.log(i)
    }
    
}
