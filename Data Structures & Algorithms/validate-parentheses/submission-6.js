class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        const closeOpen = {
            '}': '{',
            ']': '[',
            ')': '('
        }

        for(let p of s){
            if(closeOpen[p]){
                if(stack.length>0 && stack[stack.length-1] === closeOpen[p]) stack.pop();
                else return false
            }else{
                stack.push(p);
            }
        }
        return stack == "";
    }

}
