
let isIsland = false;

let isContinent = false;

if (isIsland && isContinent) {
  console.log('I am an Island and also a continent');
} else if (isIsland || isContinent) {
  console.log('Either one of us are true');
} else {
  console.log('I am not both');
}