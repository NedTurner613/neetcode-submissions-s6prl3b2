class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // /**
        //  * create a sorted array of [i,v] where v is value at i index of nums
        //  * 
        //  * let sorted = []
        //  * for(let i...){
        //  *  sorted.push([i,nums[i]);
        //  * }
        //  * 
        //  * sorted.sort((a,b)=>a[1]-b[1]);
        //  * 
        //  * let l=0;
        //  * let r=sorted.length-1;
        //  * 
        //  * let ans =[]
        //  * 
        //  * while(r>Math.floor(sorted.length/2)){
        //  *  for(let m=1;m<r;m++){
        //  *      if(sorted[l][1] + sorted[m][1]+sorted[r][1] === 0) 
        //  *  }
        //  * r--;
        //  * }
        //  * let l=0;
        //  * let r=sorted.length-1;
        //  * while(l<Math.floor((sorted.length/2)-1)){
        //  *  for(let m=1;m<r;m++){
        //  *      if(sorted[l][1] + sorted[m][1]+sorted[r][1] === 0) 
        //  *  }
        //  * r--;
        //  * }
        //  * 
        //  */

        // let mapValue = new Map();
        // let indexed = new Set();

        // for(let i=0;i<nums.length;i++){
        //     let value = nums[i];
        //     mapValue.set(value, [...(mapValue.get(value) ?? []),i]);
        // }

        // if(mapValue.get(0).length >= 3){
        //     allIndexCombo(mapValue.get(0)).forEach(val=>indexed.add(val))
        // }

        // const keys = [...mapValue.keys()].sort();


        // /**
        //  * 
        //  * let mapValue = new Map();
        //  * 
        //  * for(let i...){
        //  * let value = nums[i];
        //  * mapValue.set(value, (mapValue.get(value) ?? []).push(i))
        //  * }
        //  * 
        //  * let setI = new Set();
        //  *      as long as indices are added in arrays organized in ascending order, we can ensure no dupes
        //  *          in theory: setI.add([l,m,r].sort())
        //  * 
        //  * NEXT: we need to determine how many unique combinations of 3 key sums there will be that equal 0
        //  *  special cases: key 0 where the length of key 0 value is 3+, in which case we need all the unique combos of those indices
        //  *      also: if i + j === 0, then k value must === 0
        //  *  once we find these combinations, we will need to return all the unique combinations of values from those keys
        //  * 
        //  * SO: we will need an iterable array of all the keys
        //  *  const keys = [...mapValue.keys()].sort();
        //  * 
        //  * NEXT: we will need to iterate through that array, starting with l=0, r=keys.len-1, m=1
        //  *  special case: keys.len === 1 && keys[0] !== 0 return [];
        //  *      if: keys[0]===0: then we return all unique combinations of indices (but that can be accounted for by the usual key === 0 situation)
        //  * 
        //  * 
         


        //  */


        // function allIndexCombo(ind1,ind2,ind3){
        //     let indices = [];
        //     if(arguments.length ===1){
        //         for(let i=0;i<ind1.length-2;i++){
        //             for(let j=i+1;j<ind1.length-1;j++){
        //                 for(let k=j+1;k<ind1.length;k++){
        //                     indices.push([ind1[i],ind1[j],ind1[k]].sort());
        //                 }
        //             }
        //         }
        //     }else{
        //         for(let i=0;i<ind1.length;i++){
        //             for(let j=0;j<ind2.length;j++){
        //                 for(let k=0;j<ind3.length;k++){
        //                     indices.push([ind1[i],ind2[j],ind3[k]].sort());
        //                 }
        //             }
        //         }
        //     }
        //     return indices;
        // }


        // return [...indexed];


        /**
         * iterate through with three nested loops
         * for each sum that equals 0, add a sorted array of those values to a set
         * then iterate out of that set
         * 
         *
         */

        let ans = [];

        if(nums.length<3) return [];

        let values = new Set();
        
        for(let i=0;i<nums.length-2;i++){
            for(let j=i+1;j<nums.length-1;j++){
                for(let k=j+1;k<nums.length;k++){
                    if(nums[i]+nums[j]+nums[k]===0) values.add(JSON.stringify([nums[i],nums[j],nums[k]].sort()));
                }
            }
        }

        let thing = [...values].forEach(val=>ans.push(JSON.parse(val)));
        return ans;
        
    }
}
