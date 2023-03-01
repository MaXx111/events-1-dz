import GameLogic from './GameLogic.js';
import ScoreLogic from './ScoreLogic.js';

const score = new ScoreLogic(document.querySelector('.info'));
const start = new GameLogic(score, document.querySelector('.table'));

start.init();
