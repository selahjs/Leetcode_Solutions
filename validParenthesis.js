
var isValid = (s) =>{
    if(s.length == 0) return false;
    const Open = ['(','{','['];
    const Close = [')','}',']'];

    let stack = [], valid = true;
    for(let i = 0; i < s.length; i++){
        
        if(Open.includes(s[i])) stack.push(s[i])

        else{
            if(Open.indexOf(stack.pop()) == Close.indexOf(s[i])) continue

            else{
                valid = false;
                break;
            }
        }
    }

    return stack.length > 0? false: valid;
}

console.log(isValid('(){'));