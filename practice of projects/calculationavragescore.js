const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
  return (scoreOne + scoreTwo + scoreThree) / 3;
};

// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

const avgOfDolphins = calcAverage(97, 112, 101);

const avgOfKoalas = calcAverage(109, 95, 123);

const checkWinner = (avgOfDolphins, avgOfKoalas) => {
  if (avgOfDolphins > avgOfKoalas) {
    console.log(
      `Dolphin's win (${avgOfDolphins.toFixed(2)} vs ${avgOfKoalas.toFixed(
        2,
      )})`,
    );
  } else if (avgOfKoalas > avgOfDolphins) {
    console.log(
      `Koala's win (${avgOfKoalas.toFixed(2)} vs ${avgOfDolphins.toFixed(2)})`,
    );
  }
};

console.log(checkWinner(calcAverage(97, 112, 102), calcAverage(109, 95, 123)));
