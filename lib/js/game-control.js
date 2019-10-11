const { fromEvent, merge } = rxjs;
const { tap, map } = rxjs.operators;

let playerA = {name: 'playerA', score: 0};
let playerB = {name: 'playerB', score: 0};
let aTurn = true;
let tempWord = '';
let temp = 0;

// streams
const letters = document.querySelectorAll("#reservedLetters > button");
const arrLetter = ['letter1$', 'letter2$', 'letter3$', 'letter4$', 'letter5$', 'letter6$', 'letter7$', 'letter8$'];
arrLetter.forEach((item, index) => {
  const letter = letters[index];
  const letterName = letter.getAttribute('name');
  const letterPoint = letter.getAttribute('point');
  const addedToBoard = JSON.parse(letter.getAttribute('addedtoboard'));
  const letterObj = {letter: letterName, point: Number(letterPoint), addedToBoard: addedToBoard};
  window[item] = fromEvent(letter, 'click').pipe(map(() => letterObj));
});
const letters$ = merge(
  // arrLetter.map((letter) => window[letter]).join();
  letter1$, letter2$, letter3$, letter4$, letter5$, letter6$, letter7$, letter8$
);

const submit$ = fromEvent(document.getElementById('submit'), 'click');

// subscribers
letters$.subscribe((letterObj) => {
  letterObj.addedToBoard ? temp -= letterObj.point : temp += letterObj.point;
  letterObj.addedToBoard ? tempWord = tempWord.slice(0, -1) : tempWord += letterObj.letter;

  letterObj.addedToBoard = !letterObj.addedToBoard;
  console.log(letterObj);
  console.log(tempWord);
  console.log(temp);
});

submit$.subscribe(() => {
  document.getElementById('turnInfo').textContent = `Turn player ${aTurn ? 'B' : 'A'}`;

  // calculate total of player's score here
  let player = aTurn ? playerA : playerB;
  player.score += temp;
  console.log(player);
  temp = 0;
  tempWord = '';

  aTurn = !aTurn;
  randomize();
});