public class Solution {
    public List<List<string>> GroupAnagrams(string[] strs) {
        // var res = new Dictionary<string,List<string>>();

        // foreach(var s in strs){
        //     // turn s into a char array
        //     char[] charArray = s.ToCharArray();
        //     // sort the char array
        //     Array.Sort(charArray);
        //     // turn the sorted char array into a string sortedS
        //     string sortedS = new string(charArray);
        //     // if the dictionary doesn't contain a key equal to sortedS
        //     // then create a new key of sortedS with an empty list value
        //     if(!res.ContainsKey(sortedS)){
        //         res[sortedS] = new List<string>();
        //     }
        //     // then add s to the list value of key sortedS
        //     res[sortedS].Add(s);
        // }
        // return res.Values.ToList<List<string>>();

        var res = new Dictionary<string, List<string>>();
        foreach(var s in strs){
            // create an int array with 26 values
            int[] count = new int[26];
            foreach(char c in s){
                // for each char in the string, increase the count
                //  value of the corresponding value in count array
                // such that a=0,b=1,c=2 etc
                count[c - 'a']++;
            }
            // turn the count array into a string of digits separated by ,
            // creating a unique string for each anagram
            string key = string.Join(",",count);
            // if there is no key equal to the newly created digit string
            // create that key with an empty list value
            if(!res.ContainsKey(key)){
                res[key] = new List<string>();
            }
            // add string s to the value string of corresponding key
            res[key].Add(s);
        }

        return res.Values.ToList<List<string>>();
    }
}
