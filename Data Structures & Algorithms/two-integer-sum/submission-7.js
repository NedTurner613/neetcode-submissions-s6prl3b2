class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /**
         * track : value,index
         * 
         * iterate through, record each value and index
         * 
         * then, iterate through the map and see if two keys equal target, if so, return their indices
         * 
         * O(n2)
         * 
         * i : target - nums[i] = diff
         * 
         * diff = num[j]
         * 
         * track: diff,index
         * 
         * if(track.has(nums[i]))
         *      return value(track[nums[i]],i)
         * track(diff,i)
         * 
         */

        let track = new Map();

        for(let i=0;i<nums.length;i++){
            const diff = target - nums[i];
            if(track.has(nums[i])) return [track.get(nums[i]),i]
            track.set(diff,i)
        }

    }
}
