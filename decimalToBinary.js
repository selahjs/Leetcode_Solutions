//iterative
// const decimalToBinary = (num) =>{
//     var dec = '';
//     while(num >= 1){
//         dec = num%2 + dec;
//         num = Math.floor(num/2);
//     }
//     return dec
// }

// console.log(decimalToBinary(233)); //1010

//recursive
const decimalToBinaryR = (num) =>{
    if(num <= 1) return num%2;
    var result = String(num%2) // to make the first value a string... then all will be string
    return decimalToBinaryR(Math.floor(num/2)) + result; 
    //prepending the result b/ce we count from righti in binary
}

console.log(decimalToBinaryR(234)); //1010
// console.log(typeof(Math.floor(3/2)));
