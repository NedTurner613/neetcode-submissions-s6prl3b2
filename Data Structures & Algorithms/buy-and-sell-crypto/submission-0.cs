public class Solution {
    public int MaxProfit(int[] prices) {
        int maxP = 0;
        int minBuy = prices[0];

        foreach (int sell in prices) {
            // for each value in prices
            // determine the maximum between two values
            // current maximum profit 
            // vs the current minimum buy value subtracted from current value
            maxP = Math.Max(maxP, sell - minBuy);
            // then determine which is smaller, the current minBuy value
            // vs the current value
            minBuy = Math.Min(minBuy, sell);
        }
        return maxP;
    }
}