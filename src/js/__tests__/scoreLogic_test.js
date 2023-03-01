import ScoreLogic from '../ScoreLogic.js';

test.each([
  ['someting', { win: 2, lose: 6 }, false],
  ['someting', { win: 6, lose: 2 }, false],
  ['someting', { win: 2, lose: 2 }, true],
])(
  ('Should stop game or not'),
  (something, amount, expected) => {
    const test = new ScoreLogic(['score']);
    test.winCount = amount.win;
    test.loseCount = amount.lose;
    const result = expected;
    expect(test.stopGame()).toEqual(result);
  },
);
