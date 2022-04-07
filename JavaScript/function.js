/* 
three ways to declare a function in JavaScript:

1. function declaration
  - not part of regular top-to-bottom flow of control
  - can be called even before the declaration
  - no semicolon at end

  function myFunction(para) {
    <function body>
  }

2. function as values (regular binding)
  - semicolon required

  let myFunc = function(para) {
    <function body>
  }

3. arrow function

  const myFunc = (para) => {
    <function body>
  }

*/

const solution = (nums) => {
  return 0;
};

exports.solution = solution;
