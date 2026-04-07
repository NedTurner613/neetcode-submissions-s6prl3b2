public class Solution {
    public bool hasDuplicate(int[] nums) {
        List<int> used = new List<int>();
        foreach(int num in nums){
            if(used.Contains(num)) return true;
            else used.Add(num);
        }
        return false;
    }
}
