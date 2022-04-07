// MDN Documentation:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ======== JavaScript.info ========
// Elements
let arr = [];
console.log(arr.length);
arr.indexOf(); // return first index or -1
arr.lastIndexOf(); // return last index or -1
arr.slice(); // return subarray
arr.join(); // join elements to a string
arr.toString();
arr.toLocaleString(); // ??? how is it different from .toString()

// Arrays
arr.concat();

// Array mutation
arr.push(); // add one or more elements to the end
arr.pop(); // remove and return last element
arr.shift(); // remove and return first element
arr.unshift(); // add one or more elements to the beginning

arr.reverse();
arr.sort();

// Array Iteration
arr.forEach(myFunc);
arr.every(myFunc);
arr.some(myFunc);
arr.filter(myFunc);
arr.map(myFunc);
arr.reduce(muFunc); // reduce from left to right
arr.reduceRight(myFunc); // reduce from right to left
