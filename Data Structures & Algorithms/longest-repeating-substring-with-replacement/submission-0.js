class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        /**
         * track the current value
         * track the number of changes that would need to be made
         * 
         * track the current character
         *  track the interfering characters
         * 
         * track the max length acquired
         * 
         * 
         * let maxL =0;
         * let l =0;
         * let r=0;
         * let diffMap = new Map();
         * 
         * while(r<s.length){
         * diffMap.set(s[r],(diffMap.get(s[r]) || 0)+1);
         * 
         * while(k>[...diffMap.values().sort()].slice(0,-1)).reduce((acc,curr)=>acc+curr,0)){
         * diffMap.set(s[l],diffMap.get(s[l])-1);
         * l++;
         * }
         * 
         * maxL = Math.max(maxL,r-l+1)
         * 
         * r++;
         * }
         * 
         * 
         */
        let maxL =0;
        let l=0;
        let r=0;
        let diffMap = new Map();

        while(r<s.length){
            diffMap.set(s[r], (diffMap.get(s[r]) ?? 0)+1);

            while(k<([...diffMap.values()].sort().slice(0,-1).reduce((acc,curr)=>acc+curr,0)??0)){
                diffMap.set(s[l],diffMap.get(s[l])-1);
                l++;
            }
            maxL = Math.max(maxL,r-l+1);
            r++;
        }
        return maxL;
    }
}
