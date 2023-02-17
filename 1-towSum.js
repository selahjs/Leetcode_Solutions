const towSum = (arr,target) =>{
  
  for(let i =0; i < arr.length; i++){
  found = target - arr[i];
    if (arr.includes(found)){
      console.log(arr.indexOf(found),i);
      break;
    }
  }
}

towSum([1,2,3,4],6);