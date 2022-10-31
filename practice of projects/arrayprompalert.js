let score = 0;

function checkAnswer(question, answer) {
  const userAnswer = prompt(question);

  if (userAnswer === answer) {
    score = score + 2;
    alert(`You are correct, score: ${score}`);
  } else {
    score = score - 1;
    alert(`You are wrong, score: ${score}`);
  }
}

checkAnswer('India', 'New Delhi');
checkAnswer('USA', 'Washington');
