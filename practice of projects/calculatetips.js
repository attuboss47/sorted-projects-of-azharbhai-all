
const calcTip = (bill) => {
  let tip = 0;

  let total = 0;

  tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

  return tip;
};

const bills = [125, 555, 44];

console.log(bills);

const tips = [];

tips.push(calcTip(bills[0]));
tips.push(calcTip(bills[1]));
tips.push(calcTip(bills[2]));

console.log(tips);

