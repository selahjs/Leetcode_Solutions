/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {

    //create result array []
    //split the sentece in to words array
    var words = s.split(" ")
    //until the last sentence
    for(let i=0; i<words.length; i++){
        var min = i
        for(let j=i+1; j<words.length; j++){
            current = words[min][words[min].length-1]
            next = words[j][words[j].length-1]
            if(next < current){
                min = j
            }
        }
        [words[i], words[min]] = [words[min], words[i]]
        console.log(words)
    }
    for(let i=0; i<words.length; i++){
        // words = 0
    }
    var str = words[0]+" "
    for(let i=1; i<words.length; i++){
        str += words[i]+" "
    }
    return str
    //create var min to store current min index
    //check the number at word[i][word[i].length-1]<word[i+1][word[i+1].length-1]
    //make min = current index
    
};