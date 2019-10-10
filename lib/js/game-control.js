const { fromEvent, merge } = rxjs;
const { tap, map } = rxjs.operators;

const letters = document.querySelectorAll("#reservedLetters > button");
const arrLetter = ['letter1$', 'letter2$', 'letter3$', 'letter4$', 'letter5$'];
arrLetter.forEach((item, index) => {
  const letter = letters[index];
  const letterName = letter.getAttribute('letterName');
  const letterPoint = letter.getAttribute('letterPoint');
  window[item] = fromEvent(letter, 'click').pipe(map(() => [letterName, Number(letterPoint)]));
});
const letters$ = merge(
  // arrLetter.map((letter) => window[letter]).join();
  letter1$, letter2$, letter3$, letter4$, letter5$
);

const submit$ = fromEvent(document.getElementById('submit'), 'click');

let playerA = {name: 'playerA', score: 0};
let playerB = {name: 'playerB', score: 0};
let aTurn = true;

letters$.subscribe((letterObj) => {
  let player = aTurn ? playerA : playerB;
  player.score += letterObj[1];
  console.log(player);
});

submit$.subscribe(() => {
  document.getElementById('turnInfo').textContent = `Turn player ${aTurn ? 'B' : 'A'}`;

  // calculate total of player's score here
  // 
  // 

  aTurn = !aTurn;
});