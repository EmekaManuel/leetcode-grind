

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function(head) {
    // Initialize two pointers p1 and p2 pointing to the same destination (head)...
    var P1 = head;
    var P2 = head;
    while(P2 != null && P2.next != null){
        // In each iteration, we move p1 one node forward and we move p2 two nodes forward making P2 twice ahead as P1...
        P1 = P1.next;
        P2 = P2.next.next;
    }
    // When P2 reaches the last node, P1 will be exactly at the middle point...
    return P1;
};
