import { playGame } from "../index.js";

const gameDiscription =
  'Answer "yes" if the number is even, otherwise answer "no".';

const playEven = () => {
  const randomNumber = Math.floor(Math.random() * 100);

  const correctAnswer = randomNumber % 2 === 0 ? "yes" : "no";

  return {
    question: randomNumber,
    correctAnswer,
  };
};
export const playEvenGame = () => {
  playGame(gameDiscription, playEven);
};
