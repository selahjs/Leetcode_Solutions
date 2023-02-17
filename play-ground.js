

//write a function that searches for number five and return the index/indexes...using linear search
//check how many times number 5 exists
//where it is located
//if the number existes twice 

// const findFive = (arr) => {
//     occurance=0
//     where = []
//     for (let i=0; i<arr.length; i++){
//         if(arr[i] == 5){
//             occurance+=1;
//             where.push(i);
//         }
//     }
//     return where
// }

// console.log(findFive(arr));

//step one we split the data to half and compare if the target and current data match
//~if they match we end the search and return the data
//...if not we compare if the current data is greater/smaller than target
//.. we then remove half the list of data then go to the middle of the remaining data
//.. we repeate the process until we ran out of data, then return final output.

const binary_search = (list, target) =>{
    list = list.sort()
    first = 0;
    last = list.length-1 //7

    while(first <= last){
        midpoint = Math.round((first+last) / 2) //mid point = 4, midpoint = 5+7/2 = 14/2=7
        //5 is not 7
        if(list[midpoint] == target){
            return midpoint
        }
        // 5>7 is not true
        else if(list[midpoint] > target){
            last = midpoint -1
        }
        // 5<7 is true... first = 4+1 = 5
        else {
            first = midpoint +1
        }
    }
    return "not found";
}
arr = [1,2,3,4,5,5,7,8,9];
const found = binary_search(arr, 8)
// console.log(found)

//----create password guess app that allow 3 attepmts

// implement a binary search 

//prepare a sorted array
//

// function guess_password(){
//     attempt = 0
//     correct_p = 'hello';
//     var guess;
//     while(attempt<3){
//         guess = prompt(`guess the password, attempts left: ${3-attempt}`);

//         if(guess == correct_p){
//             console.log("you've guess write");
//             return;
//         }
//         attempt+=1
//     }
//     console.log("you've run out of attemps")

// }

// function factorial(n){
//     if(n == 1) return 1

//     return n * factorial(n-1);
// }

// until n becomes 1
// result = n
// result = result * n-1
// n = n-1

function factorial(n){
    //until n = 1
    var result = n;
    while(n > 1){
    //n = n* n-1
    result = result * (n-1)
    //decrement n by 1
    n = n-1
    }
    //return n
    return result;
}
console.log(factorial(10));
//4*3*2*1 = 12+8+4 = 24