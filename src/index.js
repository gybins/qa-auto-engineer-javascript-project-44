import { addName } from "./cli.js";
import readlineSync from "readline-sync";

export const playGame = (gameDiscription, searchRandom) => {
  const name = addName();

  console.log(gameDiscription);

  let countCorrectAnswer = 0;

  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = searchRandom();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer === correctAnswer) {
      console.log("Correct!");
      countCorrectAnswer += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (countCorrectAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
