
const avgOfDolphins = +((126 + 108 + 89) / 3).toFixed(1);
console.log(avgOfDolphins);

const avgOfKoalas = (88 + 91 + 110) / 3;

console.log(typeof avgOfKoalas);

console.log(avgOfDolphins > avgOfKoalas);

if (avgOfDolphins > avgOfKoalas && avgOfDolphins >= 100) {
  console.log('Dolphins are winners');
} else if (avgOfKoalas > avgOfDolphins && avgOfKoalas >= 100) {
  console.log('Koalas are winners');
} else if (
  avgOfKoalas === avgOfDolphins &&
  avgOfDolphins >= 100 &&
  avgOfKoalas >= 100
) {
  console.log("It's a draw");
} else {
  console.log('No Result');
}

