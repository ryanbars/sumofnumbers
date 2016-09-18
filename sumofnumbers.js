/*
 * Created by Ryan on 9/18/2016.
 */

//testarray
const testArr = [1, 2, 3, 4];

/* for loop */
function forSum(nums){
  let tot = 0;

  for (const num of nums) {
    tot += num;
  }

  return tot;
}

console.log(forSum(testArr));


function whileSum(nums){
  let tot = 0;
  let i = 0;
  while (i < nums.length){
    tot += nums[i];
    i += 1;
  }

  return tot;
}

console.log(whileSum(testArr));

function underscoreSum(nums){
  return _.reduce(nums, function summer(memo, num){ return memo + num;}, 0);
}

console.log(underscoreSum(testArr));


function recursiveSum(nums){
  let fauxNums = nums;
  if (fauxNums.length == 1){
    return fauxNums.pop();
  }
  return fauxNums.pop() + recursiveSum(fauxNums);
}

console.log(recursiveSum(testArr));




