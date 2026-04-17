class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b)=>a[0]-b[0]);
        let merged = new Map();
        merged.set(intervals[0][0],intervals[0][1]);
        let l =intervals[0][0];

        for(let r=0; r< intervals.length;r++){
            let intL=intervals[r][0];
            let intR=intervals[r][1];
            if(intL<=merged.get(l)) merged.set(l,Math.max(merged.get(l),intR));
            else{
                merged.set(intL,intR);
                l = intL;
            } 
        }
        console.log(merged)
        
        for (const [key, value] of merged) {
        console.log(`${key}: ${value}`);
        }
        // return Array.from(merged,(key,value)=>([key,value]));
        return [...merged];





    }
}
