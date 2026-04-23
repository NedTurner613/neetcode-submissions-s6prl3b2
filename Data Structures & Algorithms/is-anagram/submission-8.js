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
            track[s.charCodeAt(i)-'a'.charCodeAt(0)]++;
            track[t.charCodeAt(i)- 'a'.charCodeAt(0)]--;
        }

        return track.every((c)=>c === 0);

    }
}
