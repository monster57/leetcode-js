/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let extend  = (first, second, list) =>{

        

        first = first ?? new ListNode();
        second = second ?? new ListNode();

        let sum = first.val+second.val+list.val;
        let carry = Math.floor(sum/10);
        if(first.next || second.next || carry){
            list.next = new ListNode(carry);
        }
        list.val = sum%10;

        if(first.next == null && second.next == null){
            return;
        }
        return extend(first.next, second.next ,list.next)


    }
    let list = new ListNode();
    extend(l1, l2, list);
    return list;
};
