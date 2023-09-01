const { ListNode, getLength } = require('./19-RemoveNthNode');
const { middleNode } = require('./876-MiddleOfTheLinkedList');

// head = node1
// node1 -> node2 -> node3 -> node4 -> node5 -> null
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;

// test helper functions
// test getLength()
test('head = [1, 2, 3, 4, 5]', () => {
  expect(middleNode(node1)).toEqual(node3);
});

test('head = [1, 2, 3, 4, 5, 6]', () => {
  let node6 = new ListNode(6);
  node5.next = node6;
  node6.next = null;
  expect(middleNode(node1)).toEqual(node4);
});
