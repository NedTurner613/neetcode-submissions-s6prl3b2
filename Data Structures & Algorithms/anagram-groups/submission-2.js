class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        /**
         * 
         * let annie = new Map();
         * 
         * for(...){
         *  get annagramized 
         *      tuple, 26 values, each equals a letter
         *  add the value to the corresponding array at key
         * 
         * }
         * 
         * return [each annie value]
         * 
         * */

         let annie = new Map();

         for(let str of strs){
            let annagra = new Array(26).fill(0);
            for(let ch of str){
                annagra[ch.charCodeAt(0)-'a'.charCodeAt(0)]++;
            }
            let key = annagra.join(',')
            annie.set(key, (annie.get(key) ?? []).concat(str));
         }

        return annie.values().toArray();
    }
}
