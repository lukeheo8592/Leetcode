// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                output= [i, j];
                return output;
            }
        }
    }
};




// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

var isPalindrome = function(x) {
    if(x >= 0){
if(Number.isInteger(x.toString().length/2)){
 
        for( i=0; i <x.toString().length; i++){
            if(x.toString()[i] != x.toString()[x.toString().length - i -1]){
               return false;
            }
        }
        return true
    }else{
      for( i=0; i <x.toString().length; i++){
            console.log(1)
            if(x.toString()[i] != x.toString()[x.toString().length - i -1]){
               return false;
            }
        }
        return true
    }
    }else{
         return false;
      
    }
    
};