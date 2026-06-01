class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n=nums;
        n.forEach((ele,i)=>{
            n.push(ele);
        });
        return n;

    }
}
