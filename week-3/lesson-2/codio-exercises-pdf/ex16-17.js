// ******************* Exercise 16 *************************

// Create a simple password validation function that takes a password string as an argument.
// If the length of the password is more than 7 characters return “Strong”. If it is less than 7 characters long return “Weak.
// 1. Create a function that uses an if/else conditional expression.
// 2. Create a function that uses a ternary conditional expression.
// 3. Create a function that uses a && logical operator.
// 4. Create an “advanced” password validation function that takes a password string as an argument.
// If the password length is more than 7 characters long and has at least one capital letter return “Very Strong”. If the
// password length is only 7 characters long returns “Strong”.
// If the password length is less than 7 characters long return “Weak”
// Use only a ternary conditional expression.

function getPasswordWeakness1(password){
    if (password.length>7) return "Strong"; else return "Weak";
}
console.log(getPasswordWeakness1("WeakP"));
console.log(getPasswordWeakness1("TheStrongPassword"));

function getPasswordWeakness2(password){
    return (password.length>7) ? "Strong" : "Weak";
}
console.log(getPasswordWeakness2("WeakP"));
console.log(getPasswordWeakness2("TheStrongPassword"));

// 3. Create a function that uses a && logical operator.
// Did not undesrtand "AND with what" should the function verify;

function getPasswordWeakness4(password){
    return (password.length<7) ? "Weak" : (/[A-Z]/.test(password)) ? "Very Strong" : "Strong";    
}
console.log(getPasswordWeakness4("WeakP"));
console.log(getPasswordWeakness4("VeryStrongPassword"));
console.log(getPasswordWeakness4("simply_strong_password"));


// ******************* Exercise 17 *************************

// Create a function that receives one argument, a string color. Create a switch statement that:
// 1. If the color is yellow, pink, or orange return from the function “light color”.
// 2. If the color is a blue, purple, or brown return from the function “dark color”.
// 3. If the color is none of the above return “Unknown color”. 
// Note: It shouldn’t be case sensitive

function getColorType(color){
    colorLowCase = color.toLowerCase();    
    switch(colorLowCase){
        case 'yellow':
        case 'pink':
        case 'orange':
            return 'light color';
        case 'blue':
        case 'purple':
        case 'brown':
            return 'dark color';
        default: return 'Unknwon color';
    }
}
console.log(getColorType("BLUE"));
console.log(getColorType('Orange'));
console.log(getColorType('grey'));