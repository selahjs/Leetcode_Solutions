//iterative
const towSum = (arr,target) =>{

  for(let i=0; i < arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
        if(arr[i]+arr[j]==target){
          let found = [i,j];
          return found;
        }
    }
  }
  return 'not found'
}

console.log(towSum([1,2,3,4],2));