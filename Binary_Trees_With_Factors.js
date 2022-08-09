/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    let dp = {};
    const mod = 10**9+7;
    arr.sort((a,b)=>a-b);
    for(let ele of arr) dp[ele] = 1;
    
    for(let i = 0;i<arr.length;i++){
        let num = arr[i];
        
        for(let j = i-1;j>=0;j--){
            if(num%arr[j] == 0){
                const firstFactor = arr[j];
                const secondFactor = num/arr[j];
                if(dp[secondFactor]){
                    dp[num]  += dp[firstFactor]* dp[secondFactor];
                    
                }
            }
        }
    }
    return Object.values(dp).reduce((pv,cv)=>pv+cv)%mod;
};