public class Solution {
    public int RemoveElement(int[] nums, int val) {
        // List<int> lorst = new List<int>();
        // foreach(int num in nums){
        //     if(num != val) lorst.Add(num);
        // }
        // return lorst.Count;
        int k = 0;
        for(int i=0; i< nums.Length; i++){
            // if the value at i does not equal val
            if(nums[i] != val){
                nums[k++] = nums[i];
            }
        }
        return k;
    }
}