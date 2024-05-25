function minMax(nums) {
  let minNum = null;
  let maxNum = null;

  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] < minNum) {
      minNum = nums[i];
    }
    if (nums[i] > maxNum) {
      maxNum = nums[i];
    }
  }
  console.log(`min: ${minNum}, max: ${maxNum}`);
}

minMax([1, -3, 5]);
