var longestCommonPrefix = function(strs) {
    if(strs == 0) return "";
    let commmon = strs[0];
    for(let i=1; i<strs.length; i++){
        //if word1 and word2 are the same array[word1].indexOf(word2) becomes 0
        while(strs[i].indexOf(commmon) !== 0){
            //we minimize common by 1 letter at the end
            commmon = commmon.substring(0,commmon.length-1);
            if(commmon == "") return "";
        }
            
    }
    return commmon;
};
var words = ["123","456","789"]
console.log(longestCommonPrefix(words))