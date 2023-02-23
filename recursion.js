const reverseString = (chars) =>{
    if (chars == "") return chars

    return reverseString(chars.substring(1) + chars[0])
}

console.log(reverseString('Selahadin'))