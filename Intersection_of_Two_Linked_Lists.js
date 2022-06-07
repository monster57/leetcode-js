/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let map = new WeakMap();
    while(headA || headB){
        if(headA){
            if(map.has(headA)){
                return headA
            }

            map.set(headA , true);
            headA = headA.next;
        }
        if(headB){
            if(map.has(headB)){
                return headB
            }

           map.set(headB , true);
           headB = headB.next;
        }
    }
    return null;
};