class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()) return false;

        int[] track = new int[26];

        for(int i=0;i<t.length();i++){
            track[s.charAt(i)-97]++;
            track[t.charAt(i)-97]--;
        }

        for(int j : track){
            if(j !=0)return false;
        }
        return true;
    }
}
