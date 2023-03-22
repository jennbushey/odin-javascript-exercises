const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  // let total = 0;
  // for (let i = 0; i < a.length; i++) {
  //   total += a[i];
  // } return total;

  return a.reduce((x, y) => x + y, 0);
};

const multiply = function (a) {
  // let x = 1;
  // for (let i = 0; i < a.length; i++) {
  //   x = x * a[i];
  // } return x;

  return a.reduce((x,y) => x*y,1); // still not the solution??
};

const power = function (a, b) {
  // let x = 1;
  // for (let i = 0; i < b; i++) {
  //   x = x * a;
  // } return x;
  return Math.pow(a,b);
};

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1); //ok I cheated and used an internet solution. WTF is a factorial.
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
