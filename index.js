// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:

// Input:nums = [1,1,1], k = 2
// Output: 2

// GAMEPLAN

// -firstItem + secondItem should equal to k
// -make secondItem global var to + thirdItem
// -then make thirdItem global var, repeat for every item in arr


// function subArrSum(arr, k) {
//   let current = 0
//   let counter = 0

//   for(i=0; i < arr.length; i++){
//     let innerCurrent = arr[i]

//     if(current + innerCurrent === k){
//       counter ++
//     }

//     current = innerCurrent

//   }

//   return counter
// }

// subArrSum([1,1,1], 2)



function subArrSum(arr, k) {
  let tempSum = 0
  let counter = 0

  for(i=0; i < k; i++){
    tempSum += arr[i]
  }

  if(tempSum === k){
    counter ++
  }

  for(i = k; i < arr.length; i++){
    tempSum = tempSum - arr[i - k] + arr[i]
    if(tempSum === k){
      counter ++
    }
  }
  

  
  return counter
}

subArrSum([1,1,1,1,1], 3)