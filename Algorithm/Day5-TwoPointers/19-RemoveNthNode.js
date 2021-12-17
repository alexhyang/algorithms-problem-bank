/*
Given the head of a linked list, remove the nth node from the end of the list 
and return its head.
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
 * @param {number} n
 * @return {ListNode} head
 */
class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

var removeNthFromEnd = function (head, n) {
  let length = getLength(head);
  if (n === length) return head.next;

  let previous = getNodeByIndex(head, length - n - 1);
  previous.next = previous.next.next;
  return head;
};

// operations on linked list
// access
var getNodeByIndex = function (head, n) {
  let current = head;
  for (let i = 0; i < n; i++) current = current.next;
  return current;
};

var getItemByIndex = function (head, n) {
  // let length = getLength(head);
  // if (n < 0 || n > length - 1) return null;

  return getNodeByIndex(head, n).val;
};

// slice
var slice = function (head, start, end) {
  // assume 0 <= start <= end <= length
  // return LinkedList[start, end - 1]
  if (start === end) return [];

  let arr = [];
  let index = start;
  let current = getNodeByIndex(head, index);
  while (index < end) {
    arr.push(current.val);
    current = current.next;
    index++;
  }
  return arr;
};

// insert
var insertItem = function (head, n, val) {
  // assume 0 < n < length - 1
  let previous = getNodeByIndex(head, n - 1);
  let after = previous.next;
  let newNode = new ListNode(val);
  newNode.next = after;
  previous.next = newNode;
  return head;
};

// delete
var deleteItem = function (head, n) {
  // assume 0 < n < length - 1
  let previous = getNodeByIndex(head, n - 1);
  let toDelete = previous.next;
  let after = toDelete.next;
  previous.next = after;
  toDelete = null;
  return head;
};

// helper functions
var getLength = function (head) {
  let length = 0;
  let current = head;
  while (current !== null) {
    current = current.next;
    length++;
  }
  return length;
};

var toArray = function (head) {
  let arr = [];
  let current = head;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
};

exports.ListNode = ListNode;
exports.removeNthFromEnd = removeNthFromEnd;
exports.getItemByIndex = getItemByIndex;
exports.slice = slice;
exports.insertItem = insertItem;
exports.deleteItem = deleteItem;
exports.getLength = getLength;
exports.toArray = toArray;
