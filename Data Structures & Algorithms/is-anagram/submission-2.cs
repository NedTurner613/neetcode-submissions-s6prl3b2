public class Solution {
    public bool IsAnagram(string s, string t) {

        if(s.Length != t.Length) return false;

        int[] count = new int[26];

        for(int i=0; i<s.Length; i++){
            // add 1 to the int value in count that corresponds to the
            // char value at s[i] - the char value of 'a', such that 'a'=0, 'b'=1, etc.
            count[s[i]-'a']++;
            // subtract 1 from the int value in count that corresponds to the
            // char value at t[i] - the char value of 'a'
            count[t[i]-'a']--;
        }
        // at this point, if any of the values within count aren't 0
        // then the words aren't anagrams

        foreach(int val in count){
            if(val != 0) return false;
        }

        return true;
    }
}
