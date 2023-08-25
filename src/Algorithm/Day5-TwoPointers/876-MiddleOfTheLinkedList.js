/*
Given the head of a singly linked list, return the middle node of the linked 
list.

If there are two middle nodes, return the second middle node.
*/
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
var middleNode = function (head) {
  // let length = 0;
  // let current = head;
  // while (current !== null) {
  //   current = current.next;
  //   length++;
  // }

  // let middle = Math.floor(length / 2);
  // current = head;
  // for (let i = 0; i < middle; i++) current = current.next;
  // return current;
  let slow = head;
  let fast = head;
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

exports.middleNode = middleNode;
