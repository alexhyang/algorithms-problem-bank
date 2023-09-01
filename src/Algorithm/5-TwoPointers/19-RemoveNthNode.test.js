const {
  ListNode,
  getLength,
  toArray,
  getItemByIndex,
  slice,
  insertItem,
  deleteItem,
  removeNthFromEnd,
} = require('./19-RemoveNthNode');

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
test('head = [], test getLength()', () => {
  expect(getLength(node5.next)).toEqual(0);
});

test('head = [5], test getLength()', () => {
  expect(getLength(node5)).toEqual(1);
});

test('head = [1, 2, 3, 4, 5], test getLength()', () => {
  expect(getLength(node1)).toEqual(5);
});

// test toArray()
test('head = [], test toArray()', () => {
  expect(toArray(node5.next)).toEqual([]);
});

test('head = [5], test toArray()', () => {
  expect(toArray(node5)).toEqual([5]);
});

test('head = [1,2,3,4,5], test toArray()', () => {
  expect(toArray(node1)).toEqual([1, 2, 3, 4, 5]);
});

// test main functions
// test getItemByIndex()
test('head = [1,2,3,4,5], n = 0', () => {
  expect(getItemByIndex(node1, 0)).toEqual(1);
});

test('head = [1,2,3,4,5], n = 1', () => {
  expect(getItemByIndex(node1, 2)).toEqual(3);
});

test('head = [1,2,3,4,5], n = 1', () => {
  expect(getItemByIndex(node1, 4)).toEqual(5);
});

// test slice()
test('head = [1,2,3,4,5], start = 0, end = 5', () => {
  expect(slice(node1, 0, 0)).toEqual([]);
});

test('head = [1,2,3,4,5], start = 0, end = 5', () => {
  expect(slice(node1, 0, 5)).toEqual([1, 2, 3, 4, 5]);
});

test('head = [1,2,3,4,5], start = 0, end = 5', () => {
  expect(slice(node1, 3, 4)).toEqual([4]);
});

test('head = [1,2,3,4,5], start = 0, end = 5', () => {
  expect(slice(node1, 3, 5)).toEqual([4, 5]);
});

// test insertItem
test('head = [1,2,3,4,5], index = 1, val = 100', () => {
  expect(toArray(insertItem(node1, 1, 100))).toEqual([1, 100, 2, 3, 4, 5]);
});

test('head = [1,100,2,3,4,5], index = 4, val = 200', () => {
  expect(toArray(insertItem(node1, 4, 200))).toEqual([1, 100, 2, 3, 200, 4, 5]);
});

// test deleteItem
test('head = [1,100,2,3,200,4,5], index = 2', () => {
  expect(toArray(deleteItem(node1, 2))).toEqual([1, 100, 3, 200, 4, 5]);
});

test('head = [1,100,3,200,4,5], index = 4', () => {
  expect(toArray(deleteItem(node1, 4))).toEqual([1, 100, 3, 200, 5]);
});

// test remove nth node from the end
test('head = [1, 100, 3, 200, 5], n = 2', () => {
  expect(toArray(removeNthFromEnd(node1, 2))).toEqual([1, 100, 3, 5]);
});

test('head = [5], n = 1', () => {
  expect(toArray(removeNthFromEnd(node5, 1))).toEqual([]);
});
