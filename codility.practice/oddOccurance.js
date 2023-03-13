// function solution(A) {
//     // Implement your solution here
//     // we create a temp variable to store the current num
//     // untill A.length ...
//     // we remove the current and store it on temp
//     // we check if the temp value exsists in the array
//     // if it exists it is paired, so we put it back 
//     // return the unique value;
//     if(!A.length > 0 || A.length>1000000) return 0;
//     var temp;
//     const len = A.length;
//     var duplicate= {}
//     // A = [7,9,9,3,9]
//     // temp = 3
//     // duplicate = [9,]
//     for(let i=0; i<len; i++){
//         temp = A.pop();
//         if(!A.includes(temp) && !duplicate[temp]) return temp
//         else duplicate[temp] = temp;
//     }

//     return 0
// }

// console.log(solution([1,1,2,3,2,4,4,5,5]));
x = []
a = [1,5,2,4,6,3];

console.log(a.sort())