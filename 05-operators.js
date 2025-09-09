console.log("========== Arithmetic Operators ================");

var a = 10;
var b = 5;
var result = a + b;
console.log(`Addition ${result}`);

var result = a - b;
console.log(`Subtraction:  ${result}`);

var result = a * b;
console.log(`Multiplication:  ${result}`);

var result = a / b;
console.log(`Division:  ${result}`);

var result = a % b;
console.log(`Modulus:  ${result}`);


console.log("========== Comparison Operators ================");
var a = 10;
var b = 11;
var c = "10";
var d = 10;
console.log(`== Operator: ${a==b}`);
console.log(`== Operator : ${a==d}`);
console.log(`== Operator: ${a==c}`);

console.log(`=== Operator: ${a===b}`);
console.log(`== Operator : ${a===d}`);
console.log(`== Operator: ${a===c}`);

var a = 10;
var b = 11;
var c = "10";
var d = 10;
console.log(`!= Not Equal Operator: ${a!=b}`);// true
console.log(`!= Not Equal Operator : ${a!=d}`); // false
console.log(`!= Not Equal Operator: ${a!=c}`); // false

console.log(`< less than Operator: ${a < b }`); // true
console.log(`< less than Operator : ${a < d }`); // false

console.log(`<= less than equal Operator: ${a <= b }`); // true
console.log(`<= less than  equal Operator : ${a <= d }`); // true

console.log(`> greater than Operator: ${a > b }`); // false
console.log(`> greater than Operator : ${a > d }`); // false

console.log(`>= greater than equal Operator: ${a >= b }`); // false
console.log(`>= greater than  equal Operator : ${a >= d }`); // true


function greaterNumber(numOne, numTwo){
    var result = numOne > numTwo ? numOne : numTwo;
    console.log(`Greater Number is ${result}`);
    
}
greaterNumber(10, -10);
greaterNumber(800, 899);

function isEvenOrOddNum(num){
   var result = num % 2 == 0 ? true : false;
   return result
}
var returnValue = isEvenOrOddNum(29);
console.log(`Is Number even : ${returnValue}`);

var returnValue = isEvenOrOddNum(44);
console.log(`Is Number even : ${returnValue}`);

function maleMarriageEligibility(gender, age, boyName){
    var result = (gender == "Male" && age >=21) 
    ? `Hey ${boyName} you are eligible for marriage `
    : `Hey ${boyName} you are not eligible for marriage`
    return result;
}
var returnValue = maleMarriageEligibility("Male", 25, "Bill");
console.log(returnValue);







