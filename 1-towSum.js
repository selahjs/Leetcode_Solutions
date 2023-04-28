//time complexity O(n2), space complexity O(1)
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

//using 1 loop O(n)
const towSumC = (arr,target) =>{
  res = []
  for(let i=0; i<arr.length; i++){
    if(arr.includes(target-arr[i]) && i !== arr.indexOf(arr[i])){
      res.push(i, arr.indexOf(arr[i]))
      return res
    }
  }
  //else return empty array
  return []
}

console.log(towSumC([1,1,3,4],2));
// console.log(towSum([1,1,3,4],2));