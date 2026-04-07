public class Solution {
    public bool hasDuplicate(int[] nums) {
        // HashSet<int> used = new HashSet<int>();
        // foreach(int num in nums){
        //     if(used.Contains(num)) return true;
        //     else used.Add(num);
        // }
        // return false;
        return new HashSet<int>(nums).Count < nums.Length;
    }
}
