export default class ScoreLogic {
  constructor(elem) {
    if (typeof elem === 'string') {
      elem = document.querySelector(elem);
    }

    this._elem = elem;
    this.winCount = 0;
    this.loseCount = 0;
  }

  stopGame() {
    if (this.winCount >= 5) {
      return false;
    }

    if (this.loseCount >= 5) {
      return false;
    }

    return true;
  }

  loseMove() {
    if (this.stopGame()) {
      this.loseCount += 1;
      const loseScore = this._elem.querySelector('.score-lose');
      loseScore.textContent = this.loseCount;
      if (this.loseCount === 5) {
        this.printResult('lose');
      }
    }
  }

  winMove() {
    if (this.stopGame()) {
      this.winCount += 1;
      const winScore = this._elem.querySelector('.score-win');
      winScore.textContent = this.winCount;
      if (this.winCount === 5) {
        this.printResult('win');
      }
    }
  }

  printResult(result) {
    let decision;
    if (result === 'win') {
      decision = 'Победа!';
    }

    if (result === 'lose') {
      decision = 'Проигрыш!';
    }

    const txt = document.createElement('p');
    txt.classList.add(`score-${result}`);
    txt.textContent = decision;
    this._elem.insertBefore(txt, null);
  }
}
