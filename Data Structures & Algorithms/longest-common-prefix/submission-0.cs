public class Solution {
    public string LongestCommonPrefix(string[] strs) {
        if(strs.Length == 1) return strs[0];

        // this value will track which of the strings in the array is the shortest
        int mini = 0;
        for(int i=1;i<strs.Length;i++){
            if(strs[i].Length < strs[mini].Length){
                mini = i;
            }
        }

        Trie trie = new Trie();
        // insert the shortest string into the TrieTree
        trie.Insert(strs[mini]);

        // set the value for prefix length to equal the shortest string
        int prefixLen = strs[mini].Length;
        // for each string in the array
        for(int i=0; i<strs.Length; i++){
            // set prefix length to the longest common prefix length
            // between the current word and all other words already in the tree
            prefixLen = trie.Lcp(strs[i], prefixLen);
        }

        return strs[0].Substring(0,prefixLen);
        
    }
}

public class TrieNode{
    public Dictionary<char, TrieNode> Children = new Dictionary<char, TrieNode>();
}

public class Trie{
    public TrieNode Root;

    public Trie(){
        Root = new TrieNode();
    }

    public void Insert(string word){
        // we start at the root node of the Trie
        TrieNode node = Root;

        foreach(char c in word){
            // if there is no node for the current letter after the current node, a new node is created
            if(!node.Children.ContainsKey(c)){
                node.Children[c] = new TrieNode();
            }
            // we then traverse to the next node whic matches our current char
            node = node.Children[c];
        }
    }

    public int Lcp(string word, int prefixLen){
        // we start at the root node of the Trie
        TrieNode node = Root;
        // we determine which is shorter, the word or the prefixLen
        for(int i=0;i<Math.Min(word.Length,prefixLen); i++){
            // if there is no corresponding node for our letter at the current node...
            if(!node.Children.ContainsKey(word[i])){
                // we return the current value of i
                return i;
            }
            // we then traverse to the next node
            node = node.Children[word[i]];
        }
        // this is to account for a scenario where we traverse the entirety of the word or prefix length
        return Math.Min(word.Length, prefixLen);
    }
}