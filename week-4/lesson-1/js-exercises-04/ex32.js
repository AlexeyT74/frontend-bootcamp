// # Note: We ask you not to solve the bug by finding it with your eyes but to use the debugging tools we've learned!
// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.

function findSmallest(a, b, c) {
  if (a>c && b>c) {
    return c;
  } else if (a<c && a<b) {
    return a;
  } else {
    return b;
  }
}
findSmallest(52, 66, 2);


// 1. Uncaught ReferenceError ReferenceError: findSmalest is not defined at ex32.js:17:1
// Change spelling

// 2. Smallest value is "c=2", but the breakpoint in "return c" (line 10) does not stop. This means that smth is worng with the first logical expression. 
// a>b -> false. It is not correct to compare "false" with a number. 

// 3. The same issue in the second part of the condition. 
