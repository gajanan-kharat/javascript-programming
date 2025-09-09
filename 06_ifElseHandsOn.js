

var checkEvenOrOdd = function(num){
    if (num%2 == 0) {
        return "EVEN";
    } else {
       return "ODD"; 
    }
}
var result = checkEvenOrOdd(45);
console.log(`The number 45 is : ${result}`);
var result = checkEvenOrOdd(67);
console.log(`The number 45 is : ${result}`);

var voteEligibility= function(age){
    //invalid data
    if (age==null ||  age<=0) {
       console.log(`Invalid Data: ${age}`);
        
    } else {
        //valid data
        if (age>=18) {
            console.log(`You are eligible: ${age}.. Thank You`);    
        } else {
           console.log(`Not Eligible: ${age}`);  
        }
     
    }
}
voteEligibility(null);
voteEligibility(undefined);
voteEligibility(0);
voteEligibility(-10);
voteEligibility(19);

