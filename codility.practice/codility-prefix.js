// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(A) {
//     // create a varibale covering_prefix
//     let covering_prefix;
//     // create an array varibale to store the found array
//     var found = [];
//     //cov-pfx = 
    
//     for(let i=0; i<A.length; i++){
//         // create an array variable trimed
//         let trimed = remove_duplicate(A);
//         // until the length of the found array == trimed
//         //found will only be eqaul or less than trimmed
//         //by the time found and trimmed are equal we have went through all occurance of numbers.

//         if(found.length != trimed.length){
//             // push the current value to the found array
//             found.push(A[i]);
//             //sort found and remove duplicate
//             found = remove_duplicate(found);

//             covering_prefix = i;
//         }
//         else{
//             return covering_prefix
//         }
//     }
//     return covering_prefix;
//     // sort found array 
//     // compare each value of both the sorted arrays
//     // return covering_prefix if all values are equal 
//     // otherwise return covering_prefix... i,e the final index
//     // compare if A[0] up to A[current] contains
// }

// function remove_duplicate(nums) {
//     nums = nums.sort()
//     final = []
//     for(let i=0; i<nums.length; i++){
//         if(nums[i] != nums[i+1] && !final.includes(nums[i])){
//             final.push(nums[i])
//         }
//     }
//     return final;
// }

//linear sort

function sortNums(n){
    var sorted = []
    var greatest=0
    for(let i=0; i<n.length; i++){
        if(n[i] > greatest){
            greatest = n[i]
            // sorted.push(n[i])
        }
        else if(n[i] < n[i+1]){
            sorted.push(n[i])
        }
        else{
            sorted.push(n[i])
        }
    }
    return sorted
}
x = [2,1,5,4,6,7,3]
console.log(sortNums(x));