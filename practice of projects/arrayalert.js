let username = prompt('What is your name?');

alert('Hi ' + username);

const userAnswerOne = prompt('What is the capital of India?');

if (userAnswerOne === 'New Delhi') {
  score = score + 2;
  alert(`You are correct, score: ${score}`);
} else {
  score = score - 1;
  alert(`You are wrong, score: ${score}`);
}

const userAnswerTwo = prompt('What is the capital of USA?');

if (userAnswerTwo === 'Washington') {
  score = score + 2;
  alert(`You are correct, score: ${score}`);
} else {
  score = score - 1;
  alert(`You are wrong, score: ${score}`);
}

