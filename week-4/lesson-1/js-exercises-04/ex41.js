// Without running the code below, explain in your own
// words what the result of each block of code will be and why.

// Block 1
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
// "result" will be assigned to 5. 
// b=1 is reassigned to 5 in the function. Parameters of functions - 9 and 2 - are never used inside. 

// Block 2
var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a);
// "a" outside of the function and inside - are different ones. Console log prints the one that is outside = 1

// Block 3
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
// setTimeout does no pause the execution. In 100 msec, when console.log will be executed, value of "i" is already = 3;
// prints to "3", "3", "3".
