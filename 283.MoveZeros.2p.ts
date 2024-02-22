/**
 * https://leetcode.com/problems/move-zeroes/description/
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
 */

function moveZeroes(nums: number[]): void {
  let writePointer = 0;
  for (let readPointer = 0; readPointer < nums.length; readPointer ++) {
    const val = nums[readPointer];
    if (val!==0) {
      nums[readPointer] = 0;
      nums[writePointer] = val;
      writePointer ++;
    }
  }
};