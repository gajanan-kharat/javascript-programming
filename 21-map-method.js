
const array = [1, 2, 4, 3, 6];
const arrayTrans = array.map((element, index)=>{
    return element+index;
});
console.log(arrayTrans);

const arrayFilter = array.filter( (element) => {
    return element%2==0;
});
console.log(arrayFilter);


              