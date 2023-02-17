
var removeD = (s) =>{
    let z = s.toString().split('').sort();
    let nums = [];
    for(let i = 0; i < z.length; i++){
        if(!nums.includes(z[i])) nums.push(z[i]);
        
    }

    return nums;
}

console.log(removeD(445533221));

// const ar = [1,2,3,4,4,2]
// console.log(ar.sort());