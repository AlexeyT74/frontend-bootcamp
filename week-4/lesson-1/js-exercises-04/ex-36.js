// Without running the code below, explain in your own word
// what the result of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix them.

// Block 1
function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();
// Line 8 results with printing "undefined" to the console. 
// Variable "a" is declared (due to hoisting) but its value is assigned ater in the code.
// Line 9 prints "2" - a result of function execution;

// Block 2
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());
// We'll have "Aurelio De Rosa" printed once, and "underfined" then. 
// During the first call this is "obj". While during the second function call it does not have access to "obj" properties. 

// Block 3
function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);
// Type of both variables is Number; But "a" is not define outside of the function due to "let". We'll get underfined as a result of "console.log(typeof a)";

// Block 4
function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();
// The code prints "2" two times because second function declaration overrides declaration of the first function with the same name
// And the declaration works for whole scope

// Block 5
function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
   var e = 1;
}
funcD2();
console.log(e);
// The code prints "1" as a value of "d" because it is decalred globally.
// Execution of "console.log(e);" results in an error as "e" is declared in a function only and is not visible outsde. 
// If we want to use "e" outside the function - we should decalre it also outside the function. 

// Block 6
function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
// The code prints "Value of f in local scope: undefined" and then "Value of f in local scope: 1"
// Variable "f" is visible in the whole code but the value of "1" to it is assigned at the line 79 only. 