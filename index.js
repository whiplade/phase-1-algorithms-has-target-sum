function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i<array.length; i++){
    for (let j = i + 1; j< array.length; j++){
      if (array[i] + array[j] === target){
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  The time complexity for my function above is O(n * n)
*/

/* 
  Add your pseudocode here
  loop through array
  nested loop to find required elements
  return true if the two elements add up to target value
  return false if not
*/

/*
  Add written explanation of your solution here
  A loop is used to iterate through all the elements and
  the nested loop finds the two required elements that should 
  be equal to the target. If the two elements add up to the
  target value, true is return, otherwise false is returned.
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
