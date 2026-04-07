public class Solution {
    public bool IsAnagram(string s, string t) {
        if(s.Length != t.Length) return false;
        List<char> sl = new List<char>(s.ToCharArray());
        List<char> tl = new List<char>(t.ToCharArray());
        return sl.OrderBy(x=>x).SequenceEqual(tl.OrderBy(x=>x));
    }
}
