class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i=0;
        let j=s.length-1;
        while(i<j){
            while(i<j && /[^a-z0-9]/gi.test(s[i]))i++;
            while(j>i && /[^a-z0-9]/gi.test(s[j]))j--;
            if(s[i].toLowerCase() !== s[j].toLowerCase()) return false;
            i++;
            j--;
        }
        return true;
    }
}
