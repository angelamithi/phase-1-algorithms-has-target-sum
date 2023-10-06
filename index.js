  // Write your algorithm here
function hasTargetSum(array, target) {
  const numSet = new Set(); 
  
  for (let num of array) {
      const complement = target - num; 
      
   
      if (numSet.has(complement)) {
          return true;
      }
      
     
      numSet.add(num);
  }
  
 
  return false;
}

// Example usage:
const numbers = [2, 4, 7, 11, 15];
const targetSum = 9;
console.log(hasTargetSum(numbers, targetSum)); 


/* 
  Write the Big O time complexity of your function here
  The big notation for the above algorithm is O(n)
*/



/* 
  Add your pseudocode here
  Create a set to store encountered numbers
  Calculate the complement needed to reach the target
  If the complement is in the set, a pair is found
  Otherwise, add the current number to the set
  if no pair is found return false
*/

/*
  Add written explanation of your solution here
  In this algorithm, we iterate through the given array of numbers. 
  For each number, we calculate its complement (the number needed to reach the target) and check if it is present in the set.
  If it is, we have found a pair that adds up to the target, and we return true. 
  If no pair is found after iterating through the array, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
