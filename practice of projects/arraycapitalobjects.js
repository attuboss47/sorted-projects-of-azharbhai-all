const capitals = [
    {
      question: 'India',
      answer: 'New Delhi',
    },
    {
      question: 'USA',
      answer: 'Washington',
    },
  ];
  
  function checkGame(questions) {
    for (let i = 0; i < questions.length; i++) {
      checkAnswer(questions[i].question, questions[i].answer);
    }
  
    alert(`Final Score: ${score}`);
  }
  
  checkGame(capitals);