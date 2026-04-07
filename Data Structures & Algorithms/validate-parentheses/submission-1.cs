public class Solution {
    public bool IsValid(string s) {

        Stack<char> chars = new Stack<char>();
        int i = 0;

        foreach(char ch in s){

            // Console.WriteLine($"Begin foreach {i}");

            if(ch == '(' || ch =='{' || ch == '[') {
                chars.Push(ch);
                // Console.WriteLine($"Pushed char: {ch}");
            }
            if(ch == ')' || ch =='}' || ch == ']') {
                if(chars.Count() == 0) return false;
                char last = chars.Pop();

                // Console.WriteLine($"Popped char: {last}");
                // if(ch==')'){

                // Console.WriteLine("ch is )");
                // Console.WriteLine($"Is {(char)(last+1)} the same as {ch}");
                // }
                // if(last == '(') Console.WriteLine("last is (");

                // Console.WriteLine("last is ( : " + !(last != '('));

                // Console.WriteLine($"Compare {last} to {ch}");

                if(ch == last+1) Console.WriteLine($"{last} complements {ch}");
                else if(ch != last+1 && ch == ')'){
                    // Console.WriteLine($"{last} doesn't complement {ch}");
                    return false;
                } 
                else if(ch != last+2){
                    // Console.WriteLine($"{last} doesn't complement {ch}");
                    return false;
                } 
                // else if(ch == last+2){
                //     Console.WriteLine($"{last} complements {ch}");
                // }
            }
            // Console.WriteLine($"End foreach {i}");
            // Console.WriteLine();
            // i++;
        }
        if(chars.Count()>0) return false;
        return true;
    }
}
