class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        /**
         * l=0;
         * r=numbers.length-1;
         * 
         * if the sum is higher than target, lower r
         * if sum is lower than target, increase l
         * 
         * (while l<r){
         * const sum = numbers[l]+numbers[r];
         * if(sum ===target)return [l,r];
         * else if(sum>target)r--;
         * else if(sum<target)l++
         * }
         * 
         * return [];
         */
        let l=0;
        let r=numbers.length-1;

        while(l<r){
            const sum = numbers[l]+numbers[r];
            if(sum>target)r--;
            else if(sum<target)l++;
            else if(sum === target)return [l+1,r+1];
        }
        return [];

        /**
         * if it's too high, we find a midpoint and set the r value to it
         * if it's too low, we find a midpoint and set the l value to it
         * 
         */
    }
}
