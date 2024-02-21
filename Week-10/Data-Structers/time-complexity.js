/**********EX1*************/
//The run time of this code is O(n) in worst//

const getBalance = function (bankOperations) {
  let balance = 0;
  for (let op of bankOperations) {
    balance += op;
  }
  return balance;
};
console.log(getBalance([-27, -43, -2400, -700, 15000, 58]));

/**********EX2*************/
//The run time of this code is O(logn) in worst//

const printSome = function (complaints) {
  for (let i = 1; i < complaints.length; i = i * 2)
    console.log(complaints[i].text);
};

/**********EX3*************/
//The run time of getHype function is O(1) in worst case//
const allSides = [
  { a: 3, b: 4 },
  { a: 15, b: 21 },
  { a: 41, b: 8 },
  { a: 12, b: 6 },
];

const relevantSides = allSides.filter((s) => s.a % 3 == 0);
for (let sides of relevantSides) {
  console.log(getHype(sides));
}

const getHype = function (sides) {
  let a = sides.a;
  let b = sides.b;
  let sumOfSquares = a * a + b * b;
  return Math.sqrt(sumOfSquares);
};
