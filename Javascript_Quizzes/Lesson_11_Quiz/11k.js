function countPositive(nums) {
  let positiveCounter = 0;
  for (let i = 0; i <= nums.length; i++) {
    nums[i] >= 0 ? (positiveCounter += 1) : null;
  }
  console.log(positiveCounter);
}
countPositive([1, -3, 5]);
countPositive([-2, 3, -5, 7, 10]);
