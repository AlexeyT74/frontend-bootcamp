// # Note: We ask you not to solve the bug by finding it with your eyes but to use the debugging tools we've learned!
// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.
function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3],[(5, 66, 23)]);

// 1. Cannot read properties of undefined (reading 'length') ex31,js:9
// This is because function wants two array and we pass 1 two-dimensional array instead. 

// 2. Assignment to constant variable. ex31.js:10
// sum is changed later in the function. Should be declared as "let"

// 3. Don't understand the purpose of () in the arr2. But I don't know if it is correct or not;