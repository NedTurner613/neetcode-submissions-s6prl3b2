public class Solution {
    public bool hasDuplicate(int[] nums) {
        // HashSet<int> track = new HashSet<int>();
        // foreach(int num in nums){
        //     if(track.Contains(num)) return true;
        //     track.Add(num);
        // }
        // return false;
        return new HashSet<int>(nums).Count < nums.Length;

    }
}
