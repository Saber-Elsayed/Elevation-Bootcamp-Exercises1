/**********EX1*************/

const getBalance = function (bankOperations) {
  let balance = 0;
  for (let op of bankOperations) {
    balance += op;
  }
  return balance;
};
//The run time of this code is O(n) in worst case//
console.log(getBalance([-27, -43, -2400, -700, 15000, 58]));
