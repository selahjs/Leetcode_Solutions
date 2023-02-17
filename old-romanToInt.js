/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(roman){
    // romans={I: 1, V:5, X:10, L:50, C:100, D:500, M:1000};
    result = 0;
    for(var i = 0; i<roman.length ; i++){
        if(roman[i] == 'M'){ //&& roman[i-1] != 'C'
            result+=1000;
        }
        else if(roman[i] == 'C' && roman[i+1] == 'M'){
            result += 900;
            i++;
            continue;
        }
        if(roman[i] == 'D'){ //&& roman[i-1] != 'C'
            result+=500;
        }
        else if(roman[i] == 'C' && roman[i+1] == 'D'){
            result += 400;
            i++;
            continue;
        }
        if(roman[i] == 'C' ){//&& roman[i-1] != 'X' //&& roman[i+1] != 'M' && roman[i+1] != 'D'
            result+=100;
        }
        else if(roman[i] == 'X' && roman[i+1] == 'C'){
            result += 90;
            i++;
            continue;
        }
        if(roman[i] == 'L'){ // && roman[i-1] != 'X'
            result+=50;
        }
        else if(roman[i] == 'X' && roman[i+1] == 'L'){
            result += 40;
            i++;
            continue;
        }
        if(roman[i] == 'X'){ //&& roman[i-1] != 'I' //&& roman[i+1] != 'C' && roman[i+1] != 'L'
            result+=10;
        }
        else if(roman[i] == 'I' && roman[i+1] == 'X'){
            result += 9;
            i++;
            continue;
        }
        if(roman[i] == 'V'){ //&& roman[i-1] != 'I'
            result+=5;
        }
        else if(roman[i] == 'I' && roman[i+1] == 'V'){
            result += 4;
            i++;
            continue;
        }
        if(roman[i] == 'I'){ //&& roman[i+1] != 'V' && roman[i+1] != 'X'
            result+=1
        }
    }
    //a total of 13 conditions in all if statements and a total of 30 conditions in general.
    //I guess this is the worst way of solving this problem. But it is my way and it works. so Cudos :)

    //on my second iteration i subtracted 6 conditions ,now left with total of 24 conditions in general
    //on my third iteration i subtracted 6 conditions ie(!= conditions) now left with total of 18 conditions in general
    return result;
}
// romanToInt('MCMXCIV'); -- 1994

