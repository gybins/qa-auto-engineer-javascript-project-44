import { playGame } from "../index.js";
import _ from 'lodash';

const gameDescription = "What number is missing in the progression?";

const getProgression = (start, step, length) => {

  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const playProgression = () => {
  const progression = getProgression(_.random(1, 50), _.random(2,10), _.random(5, 10));

  const hideNum = _.random(0, progression.length - 1);

  const correctAnswer = String(progression[hideNum]);

  progression[hideNum] = "..";

  return {
    question: progression.join(" "),
    correctAnswer,
  };
};
export const playProgressionGame = () => {
  playGame(gameDescription, playProgression);
};
