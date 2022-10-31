// // // var, let, const

// // // // //primitive

// // // // //non primitive
// // // const country = 'India';

// // // const continent = 'Asia';

// // // const population = 130;

// // //  let isIsland = false;

// // // console.log(typeof country);

// // // console.log(population / 2);

// // // console.log(population + 1);




/////////if&elseconditions////////

// const markWeight = 95;
// const markHeight = 1.88;

// const johnWeight = 85;
// const johnHeight = 1.76;

// const markBMI = markWeight / (markHeight * markHeight);  // //total val 26.87867813490267

// const johnBMI = johnWeight / johnHeight ** 2;            // //total val 27.44059917355372

// //  Mark's BMI (28.3) is higher than John's (23.9)!

// if (markBMI > johnBMI) {
//   console.log("Mark's BMI " + markBMI + "is higher than John's " + johnBMI);
// } else if (markBMI < johnBMI) {
//   console.log(`John's BMI ${johnBMI.toFixed(1)} is higher than Mark's ${markBMI.toFixed(1,)}`,);
// } else {
//   console.log('Equal');
// }


// // const markWeight = 95;
// // const markHeight = 1.88;

// // const johnWeight = 85;
// // const johnHeight = 1.76

// // let markBMI= markWeight / (markHeight*markHeight);
// // let johnBMI= johnWeight / johnHeight**2;

// // console.log(markBMI)
// // console.log(johnBMI)




////////// && AND ||  /////////

// // // // let isIsland = false;

// // // // let isContinent = false;

// // // // if (isIsland && isContinent) {
// // // //   console.log('I am an Island and also a continent');
// // // // } else if (isIsland || isContinent) {
// // // //   console.log('Either one of us are true');
// // // // } else {
// // // //   console.log('I am not both');
// // // // }

///////


// // // // const avgOfDolphins = +((126 + 108 + 89) / 3).toFixed(1);
// // // // console.log(avgOfDolphins);

// // // // const avgOfKoalas = (88 + 91 + 110) / 3;

// // // // console.log(typeof avgOfKoalas);

// // // // console.log(avgOfDolphins > avgOfKoalas);

// // // // if (avgOfDolphins > avgOfKoalas && avgOfDolphins >= 100) {
// // // //   console.log('Dolphins are winners');
// // // // } else if (avgOfKoalas > avgOfDolphins && avgOfKoalas >= 100) {
// // // //   console.log('Koalas are winners');
// // // // } else if (
// // // //   avgOfKoalas === avgOfDolphins &&
// // // //   avgOfDolphins >= 100 &&
// // // //   avgOfKoalas >= 100
// // // // ) {
// // // //   console.log("It's a draw");
// // // // } else {
// // // //   console.log('No Result');
// // // // }



// // // // let day = '';

// // // // switch (day) {
// // // //   case 'Monday':
// // // //     console.log('It is Monday');
// // // //     break;
// // // //   case 'Tuesday':
// // // //     console.log('It is Tuesday');

// // // //   default:
// // // //     console.log('Check the input');
// // // // }


// // // // let isRaining = false;
// // // // if (isRaining) {
// // // //   console.log('It is raining');
// // // // } else {
// // // //   console.log('It is not raining');
// // // // }

// // // // isRaining ? console.log('It is raining') : console.log('It is not raining');

// // // // console.log(`It is ${isRaining ? '' : 'not'} raining`);


// // // //primitive - number, string, boolean, null, undefined,

// // // // let a;
// // // // const b = null;

// // // // console.log(a);
// // // //console.log(b);



// // // // function sum(num1, num2) {
// // // //   return num1 + num2;
// // // // }

// // // // console.log(showBill(375));
// // // // console.log(showBill(65));
// // // // console.log(showBill(175));

// // // // // console.log(sum(3, 4));




// // // const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
// // //   return (scoreOne + scoreTwo + scoreThree) / 3;
// // // };

// // // // Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

// // // // const avgOfDolphins = calAverage(97, 112, 102);

// // // // const avgOfKoalas = calAverage(109, 95, 123);

// // // const checkWinner = (avgOfDolphins, avgOfKoalas) => {
// // //   if (avgOfDolphins > avgOfKoalas) {
// // //     console.log(
// // //       `Dolphin's win (${avgOfDolphins.toFixed(2)} vs ${avgOfKoalas.toFixed(
// // // //         2,
// // // //       )})`,
// // // //     );
// // // //   } else if (avgOfKoalas > avgOfDolphins) {
// // // //     console.log(
// // // //       `Koala's win (${avgOfKoalas.toFixed(2)} vs ${avgOfDolphins.toFixed(2)})`,
// // // //     );
// // // //   }
// // // // };

// // // // console.log(checkWinner(calcAverage(97, 112, 102), calcAverage(109, 95, 123)));





// // // const numbers = [1, 2, 3, 4, 5];

// // // // console.log(numbers[4]);

// // // // console.log(numbers.length);



// // // //modifing

// // // //pop, push, shift ,unshift

// // // const numbers = [1, 2, 3, 4, 5];

// // // console.log(numbers);
// // // numbers.pop();
// // // console.log(numbers);
// // // numbers.push(5);
// // // console.log(numbers);
// // // numbers.shift();
// // // console.log(numbers);
// // // numbers.unshift(1);
// // // console.log(numbers);

// // let numbers = [1, 2, 3, 4, 5, 6];

// // for (let i = 0; i < numbers.length; i++) {
// //   console.log(numbers[i]);
// // }



