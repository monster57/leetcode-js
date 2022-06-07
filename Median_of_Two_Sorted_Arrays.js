/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let large = nums2.length>nums1.length?nums2:nums1;
    let small = nums2.length>nums1.length?nums1:nums2;

    let totalSize = small.length +large.length;
    let isOdd = totalSize%2 == 0?false:true;

    let start = 0;
    let end = small.length


    while(start<=end){
        let sMid = Math.floor((end+start)/2);
        let lMid = Math.floor((totalSize+1)/2) - sMid;

        const  sLeftNum = sMid == 0?-Infinity:small[sMid-1];
        const  sRightNum = sMid == small.length?Infinity:small[sMid];

        const  lLeftNum = lMid == 0?-Infinity:large[lMid-1];
        const  lRightNum = lMid == large.length?Infinity:large[lMid];

        if(lLeftNum<=sRightNum && sLeftNum<=lRightNum){
            const leftVal = Math.max(lLeftNum , sLeftNum);
            
            if(isOdd){
                return leftVal
            }else{
                const rightVal = Math.min(lRightNum , sRightNum);
                
                return (leftVal+rightVal)/2
            }
        }

        else if(sLeftNum>lRightNum){
            end = sMid -1;
        }else{
            start =sMid+1;
        }
    }
};

console.log(findMedianSortedArrays([1,3],[2]));