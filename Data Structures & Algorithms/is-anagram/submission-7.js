class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;

        let track = new Array(26).fill(0);

        for(let i=0;i<s.length;i++){
            track[s.charCodeAt(i) - 97]++;
            track[t.charCodeAt(i)- 97]--;
        }
        return track.every((val) => val ===0);
    }
}
