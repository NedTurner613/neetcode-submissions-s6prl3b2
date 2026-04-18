class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for(let p of s){
            if(p==='{' || p === '[' || p === '('){
                stack.push(p);
                console.log(stack);
            }
            else if(this.isComplement(stack[stack.length-1],p)){
                console.log(stack.pop());
            }
            else return false;
        }
        return stack == "";
    }

    isComplement(l,r){
        let str = l+r;
        console.log(`isComplement str: ${str}`)
        if(str === "{}" || str === "[]" || str === "()") return true;
        else return false;
    }
}
