const markWeight = 95;
const markHeight = 1.88;

const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / (markHeight * markHeight);  // //total val 26.87867813490267

const johnBMI = johnWeight / johnHeight ** 2;            // //total val 27.44059917355372

//  Mark's BMI (28.3) is higher than John's (23.9)!

if (markBMI > johnBMI) {
  console.log("Mark's BMI " + markBMI + "is higher than John's " + johnBMI);
} else if (markBMI < johnBMI) {
  console.log(`John's BMI ${johnBMI.toFixed(1)} is higher than Mark's ${markBMI.toFixed(1,)}`,);
} else {
  console.log('Equal');
}


// const markWeight = 95;
// const markHeight = 1.88;

// const johnWeight = 85;
// const johnHeight = 1.76

// let markBMI= markWeight / (markHeight*markHeight);
// let johnBMI= johnWeight / johnHeight**2;

// console.log(markBMI)
// console.log(johnBMI)
