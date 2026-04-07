class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let A = {}
        for(let i=0;i<nums.length;i++){
            A[nums[i]] = i;
        }

         for(let i=0;i<nums.length;i++){
            let diff = target - nums[i];
            if(A[diff] !== undefined && A[diff] !== i) return [i,A[diff]];
        }

    }
}
