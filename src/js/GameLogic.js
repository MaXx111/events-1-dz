export default class GameLogic {
  constructor(scoreLogic, elem) {
    if (typeof elem === 'string') {
      elem = document.querySelector(elem);
    }
    this.scoreLogic = scoreLogic;
    this._elem = elem;
    this.onPlayerClick = this.onPlayerClick.bind(this);
    this._elem.addEventListener('click', this.onPlayerClick);
    this.interval = 0;
  }

  init() {
    this.imgMove();
    this.interval = setInterval(() => {
      if (this._elem.querySelector('.goblin')) {
        this.clearImg();
      }
      this.imgMove();
      if (this.scoreLogic.winCount >= 5) {
        clearInterval(this.interval);
        this.clearImg();
      }
      if (this.scoreLogic.loseCount >= 5) {
        clearInterval(this.interval);
        this.clearImg();
      }
    }, 1000);
  }

  imgMove() {
    const items = this._elem.querySelectorAll('.square');
    const img = document.createElement('img');
    const random = Math.floor(Math.random() * items.length);
    img.src = './image/goblin.png';
    img.classList.add('goblin');
    items[random].insertBefore(img, null);
  }

  clearImg() {
    const img = this._elem.querySelector('.goblin');
    const parent = img.parentNode;
    parent.removeChild(img);
  }

  onPlayerClick(e) {
    if (this.scoreLogic.stopGame()) {
      if (e.target.className === 'goblin') {
        this.scoreLogic.winMove();
        this.clearImg();
      } else if (e.target.className === 'square') {
        this.scoreLogic.loseMove();
      }
    }
  }
}
