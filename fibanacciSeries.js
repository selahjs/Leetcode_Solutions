//iterative
function fibonacciSeries(nums){
    if(!nums.length>0) return false;
    for(let i=0; i<nums.length-2; i++){
        if(nums[i]+nums[i+1] == nums[i+2]) {
            continue;
        }
        else return false;
    }
    return true;
}

//recursive
function fibRecursive(n){
    if(n==0 || n==1) return n;
    
    else {
        return fibRecursive(n-1) + fibRecursive(n-2);
    }
}

console.log(fibonacciSeries([0,1,1,2,3,5,8,13,21,34,55,89,144,233]))
// console.log(fibRecursive(89))