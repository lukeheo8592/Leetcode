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


// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.


var romanToInt = function(s) {
    let tnd;
    let hnd;
    let ten;
    let one;
  let count = 0;
  let order = 0;
        for(let i = 0; i < s.length; i++){
            if(s[i] == "M"){
                count++;
                order++;
            }else if(s[i] == "C"){
                break;
            }else{
              break;
            }
        }
        
   tnd = 1000*count;
   count = 0;
        
            if(s[order] == "C"){
                order++;
                count++;
                if(s[order] == "M"){
                    order++;
                    count = 9;
                }else if(s[order] == "D"){
                     order++;
                    count = 4;
                }else if(s[order] == "C"){
                    order++;
                    count++;
                    if(s[order] == "C"){
                         order++;
                         count++;
                    }

                }
            
            }else if(s[order] == "D"){
                order++;
                count = 5;
                while(s[order] == "C"){
                         order++;
                         count++;
                }
            }
            hnd = count * 100;
            count = 0;

            if(s[order] == "X"){
                order++;
                count++;
                if(s[order] == "C"){
                    order++;
                    count = 9;
                }else if(s[order] == "L"){
                     order++;
                    count = 4;
                }else if(s[order] == "X"){
                    order++;
                    count++;
                    if(s[order] == "X"){
                         order++;
                         count++;
                    }

                }
            
            }else if(s[order] == "L"){
                order++;
                count = 5;
                while(s[order] == "X"){
                         order++;
                         count++;
                }
            }
            ten = count * 10;
            count = 0;

            if(s[order] == "I"){
                order++;
                count++;
                if(s[order] == "X"){
                    order++;
                    count = 9;
                }else if(s[order] == "V"){
                     order++;
                    count = 4;
                }else if(s[order] == "I"){
                    order++;
                    count++;
                    if(s[order] == "I"){
                         order++;
                         count++;
                    }

                }
            
            }else if(s[order] == "V"){
                order++;
                count = 5;
                while(s[order] == "I"){
                         order++;
                         count++;
                }
            }
            one = count;
            let result = one + ten + hnd+ tnd;
            return result;

};


// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function(strs) {
    let count = 0;
    let prefix;
    let index;
    strs.sort();
    for (let i = 0; i < strs[0].length; i++) {
      let j = 1;
      let isprefix = true;
      while (j < strs.length) {
        if (strs[0][i] == strs[j][i]) {
          isprefix = true;
        }else if(strs[0][i] != strs[j][i]) {
          isprefix = false;
        }
        j++
      }
      if (isprefix) {
        count++
      } else {
        break;
      }
    }
  
    if (count == 0) {
      return "";
    } else if (count > 0) {
      
      prefix = strs[0].slice(0, count);
      return prefix;
    }
  };