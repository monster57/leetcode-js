/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    envelopes = envelopes.sort((a,b)=>{
        return a[0] == b[0]? b[1] - a[1]: a[0]-b[0]
    });

    let result = [envelopes[0][1]];

    for(let i = 1;i<envelopes.length;i++){
        let element = envelopes[i][1];
        let index = binarySearch(result , 0 , result.length , element);
        if(index>=0){
            result[index] = element
        }
    }
    return result.length;

    
};


var binarySearch = (arr , start, end , target)=>{
    
    while(start<end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]< target){
            start = mid+1;
        }else{
            end = mid;
        }
        

    }
    return start;
}


console.log(maxEnvelopes([[1,15],[7,18],[7,6],[7,100],[2,200],[17,30],[17,45],[3,5],[7,8],[3,6],[3,10],[7,20],[17,3],[17,45]]))
// console.log(maxEnvelopes([[1,1],[1,1],[1,1]]))