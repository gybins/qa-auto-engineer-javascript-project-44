import { playGame } from "../index.js";

const gameDescription = "Find the greatest common divisor of given numbers.";

const playGcd = () => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);

  const question = `${number1} ${number2}`;

  const gcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b != 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const correctAnswer = String(gcd(number1, number2));

  return {
    question,
    correctAnswer,
  };
};

export const playGcdGame = () => {
  playGame(gameDescription, playGcd);
};
