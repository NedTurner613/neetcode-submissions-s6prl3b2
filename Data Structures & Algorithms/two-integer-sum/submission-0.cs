public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        // int[] ind = new int[2];
        // for(int i = 0;i<nums.Length;i++){
        //     for(int j=i+1; j<nums.Length;j++){
        //         if(nums[i]+nums[j]==target) return new int[]{i,j};
        //     }
        // }
        // return ind;

        List<int[]> A = new List<int[]>();
        for(int idx = 0; idx <nums.Length;idx++){
            A.Add(new int[]{nums[idx],idx});
        }

        A.Sort((a,b) => a[0].CompareTo(b[0]));

        int i= 0, j= nums.Length-1;
        while(i<j){
            int cur = A[i][0] + A[j][0];
            if (cur == target){
                return new int[]{
                    Math.Min(A[i][1],A[j][1]),
                    Math.Max(A[i][1],A[j][1])
                };
            }else if(cur<target) i++;
            else j--;
        }
        return new int[0];
    }
}
