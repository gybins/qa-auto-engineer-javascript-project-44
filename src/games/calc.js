import { playGame } from "../index.js";

const gameDescription = "What is the result of the expression?";

const playCalc = () => {
  const operations = ["+", "-", "*"];
  const randomOperation = Math.floor(Math.random() * operations.length);
  const operation = operations[randomOperation];

  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);

  let correctAnswer;

  switch (operation) {
    case "+":
      correctAnswer = randomNumber1 + randomNumber2;
      break;
    case "-":
      correctAnswer = randomNumber1 - randomNumber2;
      break;
    case "*":
      correctAnswer = randomNumber1 * randomNumber2;
      break;
    default:
      correctAnswer = 0;
  }

  const question = randomNumber1 + operation + randomNumber2;



  return {
    correctAnswer: String(correctAnswer),
    question
  };
};

export const playCalcGame = () => {
  playGame(gameDescription, playCalc);
};
