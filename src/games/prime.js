import _ from "lodash";
import { playGame } from "../index.js";

const gameDescription =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (number) => {
  if (number <= 1) {
    return 'no';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const playPrime = () => {

    const randomNumber = _.random(1, 20)

    const result = getPrime(randomNumber)

 return {
    question: randomNumber,
    correctAnswer: result
 }   
}
export const playPrimeGame = () => {
    playGame(gameDescription, playPrime)    
}
