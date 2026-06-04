import { addName } from "./cli.js";
import readlineSync from "readline-sync";

export const playEven = () => {
  const name = addName();
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
  let countCorrectAnswer = 0;

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const correctAnswer = randomNumber % 2 === 0 ? "yes" : "no";
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question("Your answer:");
    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log("Correct!");
      countCorrectAnswer++;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  if (countCorrectAnswer === 3) {
    console.log("Congratulations, " + name + "!");
  }
};
