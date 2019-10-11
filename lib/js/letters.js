const letterWrapper = document.querySelector("#reservedLetters");

const allLetters = [
  {name: 'A', point: 1},
  {name: 'I', point: 1},
  {name: 'U', point: 1},
  {name: 'E', point: 1},
  {name: 'O', point: 1},
  {name: 'T', point: 2}
];
const pickRandom = (arr,count) => {
  let _arr = [...arr];
  return[...Array(count)].map( ()=> _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0] ); 
};

randomLetters = pickRandom(allLetters, 3);

randomLetters.forEach(letter => {
  const button = document.createElement('button');
  button.setAttribute('name', letter.name);
  button.setAttribute('point', letter.point);
  button.setAttribute('addedtoboard', 'false');
  button.textContent = `
    ${letter.name} <sup>${letter.point}</sup>
  `;

  letterWrapper.appendChild(button);
});
