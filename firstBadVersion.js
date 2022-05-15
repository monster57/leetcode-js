https://leetcode.com/problems/first-bad-version/
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {

    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1;
        let end = n;
        if(isBadVersion(1)){
            return 1;
        }
        while(start<=n){
            let mid = Math.floor(start+(end-start)/2);
            if((!isBadVersion(mid) && isBadVersion(mid+1))){
                return mid+1;
            }else if(isBadVersion(mid)){
                end = mid
            }else{
                start = mid+1;
            }
        }
        return -1;
    };
};