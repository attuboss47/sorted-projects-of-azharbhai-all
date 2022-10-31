let isRaining = false;
if (isRaining) {
  console.log('It is raining');
} else {
  console.log('It is not raining');
}

isRaining ? console.log('It is raining') : console.log('It is not raining');

console.log(`It is ${isRaining ? '' : 'not'} raining`);
