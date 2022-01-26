function FindSum(nums,target) {
    for (let i = 0; i < nums.length; i++) {
        
        for (let j = i+1; j < nums.length; j++) {
            
            if((nums[i]+nums[j])===target){
                nums = [i,j]
                return nums;
            }
        }
        
    }
}
function FindSum2(nums,target) {
  
    for (let i = 0; i < nums.length; i++) {
        let index2=nums.findIndex(e => e ===(target-nums[i]));
        if(index2>-1){
          return nums=[i,index2];
        }
        
    }
    
}
console.log(FindSum2([2,3,4],6));
console.log(FindSum([3,1,3,8],9));