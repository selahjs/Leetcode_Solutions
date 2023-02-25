
//~ 7769 JS recursive call depth 

const reverseString = (chars) =>{
    if (chars == "") return chars

    return reverseString(chars.substring(1))  + chars[0]
}
//elahadin + S
//lahadin + e + S
//ahadin + l + e + S
// ...
// n+i+d+a+h+a+l+e+S
// console.log(reverseString('Selahadin'))



const recurseNums = (num) =>{
    if(num == 1) return 1

    return num + recurseNums(num-1)
}

// console.log(recurseNums(5))

const recursePalindrom = (num) =>{
    if(num.length <= 1) return true


    if (num[0] == num[num.length-1]){
        num = num.substring(1, num.length-1)
    }
    else return false;

    return recursePalindrom(num)
}

console.log(recursePalindrom('12'))

