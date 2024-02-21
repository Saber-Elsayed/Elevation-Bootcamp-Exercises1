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
