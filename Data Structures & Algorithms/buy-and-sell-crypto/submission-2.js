class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        /**
         * l =0
         * r=1
         * maxProfit =0
         * 
         * while(r<prices.length){
         * 
         * maxProfit = Math.max(maxProfit,prices[r]-prices[l])
         * 
         * if(prices[r]<prices[l]) l=r;
         * 
         * r++;
         * }
         * 
         * 
         * 
         */
        if(prices.length <= 1)return 0;

        let l=0;
        let r=1;
        let maxProfit=0;

        while(r<prices.length){
            maxProfit = Math.max(maxProfit,prices[r]-prices[l]);
            if(prices[r]<prices[l]) l=r;
            r++;
        }

        return maxProfit;
    }
}
