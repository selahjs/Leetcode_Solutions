function solution(N) {
    // first convert the decimal to binary
    // create a varibale zeros=0 to count zeros
    // create a varibale maxZero=0 for max nums of zero
    // the first num of binary is always one, if not return zero
    // for i<N.length
        // while N[i] == 0 we increment zeros by 1, and i++
    // when we find 1 we check if zero>maxZero, if true maxZero = zero, reset zeros and must assign maxzero if 1 is followed after z zero
    //return maxZero
    N = N.toString(2)
    var zeros = 0;
    var maxZero = 0;
    if(N[0] != 1) return 0;
    console.log(N)
    for(let i=0; i<N.length;i++){
        while(N[i]==0){
            zeros++;
            console.log('zeros',zeros,'N=',N[i],'Max=',maxZero);
            i++;
        }
        if(N[i]==1){
            if(zeros>maxZero){
             maxZero = zeros;
             //zeros = 0; ...previosly the code only resets when zero>maxZero which is wrong
             //should reset everytime we find 1, (after assigning to maxZero)
             }
             zeros = 0;
             console.log('N=',N[i],'Max=',maxZero)
        }
        
    }
    return maxZero
}

console.log(solution(1376796946))