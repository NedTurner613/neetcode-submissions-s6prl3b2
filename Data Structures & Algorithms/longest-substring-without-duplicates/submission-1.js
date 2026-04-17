class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    lengthOfLongestSubstring(s) {
        let set = new Set();
        let l = 0;
        let best = 0;
        for(let r =0;r<s.length;r++){
            console.log(`R = ${r}`)
            let char = s[r];
            while(set.has(char)){
                console.log(`   ${s.substring(l,r+1)}`);
                set.delete(s[l]);
                l++;
            }
            set.add(char);
            console.log(`   ${s.substring(l,r+1)}`);
            best = Math.max(best,r-l+1);
        }
        return best;
    }
}
