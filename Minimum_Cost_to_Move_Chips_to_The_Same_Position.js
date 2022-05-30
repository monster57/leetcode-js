/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let positionOdd = 0;
    let positionEven = 0;

    for(let i =0 ; i<position.length;i++){
        if(position[i]%2 == 0){
            positionEven++;
        }else{
            positionOdd++;
        }
    }
    return Math.min(positionOdd, positionEven);
};



console.log(minCostToMoveChips([1,2,3]));