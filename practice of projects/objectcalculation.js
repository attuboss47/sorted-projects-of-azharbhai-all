const mark = {
  name: 'Mark',
  mass: 78,
  height: 1.69,
};

const john = {
  name: 'John',
  mass: 92,
  height: 1.95,
};

const calcBMI = (mass, height) => {
  let BMI = mass / height ** 2;

  return BMI;
};

console.log(calcBMI(john.mass, john.height));
console.log(calcBMI(mark.mass, mark.height));
