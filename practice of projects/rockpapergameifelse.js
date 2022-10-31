let result = '';
function playGame(user) {
  let comp = getCompInput();

  if (user === 'rock') {
    if (comp === 'rock') {
      result = 'draw';
    } else if (comp === 'paper') {
      result = 'lose';
    } else if (comp === 'scissors') {
      result = 'win';
    }
  } else if (user === 'paper') {
    if (comp === 'rock') {
      result = 'win';
    } else if (comp === 'paper') {
      result = 'draw';
    } else if (comp === 'scissors') {
      result = 'lose';
    }
  } else if (user === 'scissors') {
    if (comp === 'rock') {
      result = 'lose';
    } else if (comp === 'paper') {
      result = 'win';
    } else if (comp === 'scissors') {
      result = 'win';
    }
  }

  return result;
}

function getCompInput() {
  let computerInput = '';

  let randomNumber = Math.trunc(Math.random() * 3);

  if (randomNumber === 0) {
    computerInput = 'rock';
  } else if (randomNumber === 1) {
    computerInput = 'paper';
  } else if (randomNumber === 2) {
    computerInput = 'scissors';
  }

  return computerInput;
}

console.log(playGame('rock'));
console.log(playGame('paper'));
console.log(playGame('rock'));
console.log(playGame('scissors'));
console.log(playGame('rock'));
console.log(playGame('paper'));

