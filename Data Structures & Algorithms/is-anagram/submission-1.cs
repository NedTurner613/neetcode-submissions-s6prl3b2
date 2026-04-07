public class Solution {
    public bool IsAnagram(string s, string t) {
        if(s.Length != t.Length) return false;
        // List<char> sl = new List<char>(s.ToCharArray());
        // List<char> tl = new List<char>(t.ToCharArray());
        // return sl.OrderBy(x=>x).SequenceEqual(tl.OrderBy(x=>x));
        
        
        // Dictionary<char,int> countS = new Dictionary<char,int>();
        // Dictionary<char,int> countT = new Dictionary<char,int>();
        // for(int i=0; i<s.Length; i++){
        //     countS[s[i]] = countS.GetValueOrDefault(s[i], 0) +1;
        //     countT[t[i]] = countT.GetValueOrDefault(t[i], 0) + 1;
        // }
        // return countS.Count == countT.Count && !countS.Except(countT).Any();

        int[] count = new int[26];

        for (int i = 0; i < s.Length; i++) {
            count[s[i] - 'a']++;
            count[t[i] - 'a']--;
        }

        foreach (int val in count) {
            if (val != 0) {
                return false;
            }
        }
        return true;



    }
}
