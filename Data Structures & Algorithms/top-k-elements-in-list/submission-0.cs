public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        // create a dictionary to track the numbers (key) and their counts (value)
        Dictionary<int,int> count = new Dictionary<int,int>();
        // create an array of lists with a length equal to 1 more than the max possible count for a single number
        // this ensures that there is a guaranteed 1:1 correlation between all possible count values and index values in the array 
        List<int>[] freq = new List<int>[nums.Length+1];
        // fill the array of Lists with empty Lists
        for(int i = 0; i<freq.Length; i++)freq[i] = new List<int>();
        
        // for each number in nums, increase the count (value) of  that number (key)
        // if there is no corresponding key(number), create that key with a value(count) of 1
        foreach(int n in nums){
            if(count.ContainsKey(n)) count[n]++;
            else count[n] = 1;
        }

        // for each pair of numbers(key) and counts(values) in count
        // add that number(key) to the list at the corresponding count(value) in the array
        foreach(var entry in count){
            freq[entry.Value].Add(entry.Key);
        }

        // initialize an array with length k
        int[] res = new int[k];
        // create an index value to navigate through k
        int index = 0;
        // starting with the highest value List in freq, iterate down through the lists
        // the && statement ensures that if k=0, we don't attempt to move forward
        for(int i=freq.Length-1;i>0 && index<k; i--){
            // iterate through each list iterated through
            foreach(int n in freq[i]){
                // add that value to the res array at current index value
                // then increase index by 1
                res[index++] = n;
                // if index now equals k, return res
                if(index==k) return res;
            }
        }
        // return res in case k was 0
        return res;
    }
}
