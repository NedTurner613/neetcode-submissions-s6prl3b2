class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        /**
         * two pointer
         * l=0
         * r=s.length-1
         * while(l<=r){
         *  while(/[^a-zA-Z0-9]/g.test(s[l]))l++
         *  while(/[^a-zA-Z0-9]/g.test(s[r]))r++
         *  if(l<=r && s[l].toLowercase() != s[r].toLowercase())return false
         *  l++
         *  r--
         */

        let l=0;
        let r=s.length-1;

        while(l<r){
            while(/[^a-zA-Z0-9]/.test(s[l]))l++;
            while(/[^a-zA-Z0-9]/.test(s[r]))r--;
            if(l<r && s[l].toLowerCase() !== s[r].toLowerCase())return false;
            l++;
            r--;
        }
        return true;
    }
}
