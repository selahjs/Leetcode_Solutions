//insertion sort O(n2)
const insetionSort = (nums) =>{
    for(let i=1; i<nums.length; i++){
        let j=i //4,3
        while(j>0 && nums[j-1] > nums[j]){
            [nums[j-1] , nums[j]] = [nums[j] , nums[j-1]]
            j-=1
            // console.log('tried')
        }
    }
    return nums
}

console.log('insertion: ',insetionSort([2,4,6,8,3,1]))

//selection sort O(n2)
const selectionSort = (nums) =>{
    for(let i=0; i<nums.length; i++){
        let min=i //4,3
        for(j=i+1; j<nums.length; j++){
            if(nums[j] < nums[min]) min = j
        }

        if(min != i){
            [nums[i], nums[min]] = [nums[min], nums[i]]
            console.log('tried')
        }
    }
    return nums
}

// console.log('selection: ',selectionSort([2,4,6,8,3,1]))

// bubble sort O(n2)
const bubbleSort = (nums) =>{
    for(let i=0; i<nums.length; i++){let min=i //4,3
        for(j=0; j<nums.length-1; j++){
            if(nums[j] > nums[j+1]) {
                [nums[j], nums[j+1]]=[nums[j+1], nums[j]]
                console.log('tried')
            }
        }
    }
    return nums
}

console.log('buuble: ', bubbleSort([2,4,6,8,3,1]))

// bubble sort O(n2)
const countingSort = (nums) =>{
    for(let i=0; i<nums.length; i++){let min=i //4,3
        for(j=0; j<nums.length-1; j++){
            if(nums[j] > nums[j+1]) {
                [nums[j], nums[j+1]]=[nums[j+1], nums[j]]
                console.log('tried')
            }
        }
    }
    return nums
}

console.log('buuble: ', countingSort([2,4,6,8,3,1]))

//[-2, 45, 0, 11, -9]  i=0
//[-2, 0, 11, -9, 45]  i=1
//[-2, 0, -9, 11, 45]
//[-2, -9, 0, 11, 45]
//[-9, -2, 0, 11, 45]
