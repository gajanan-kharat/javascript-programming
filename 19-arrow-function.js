


let add = (n1,n2) => {
    console.log(n1,n2);
}
add(10, 20);

const display = ()=>{
    console.log("Display"); 
}
display();

let square = (num) => {
    const result = num*num;
    return result;
}
let returnValue = square(10);
console.log(returnValue);

square(20);


let multiply = (n1, n2, n3=1) => {
    console.log(n1*n2*n3); 
}
multiply(2, 3, 4);
multiply(9, 6);