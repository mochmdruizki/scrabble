const letterWrapper = document.querySelector("#reservedLetters");

const consonant = [
  {name:'B',point:3},
  {name:'C',point:3},
  {name:'D',point:2},
  {name:'F',point:4},
  {name:'G',point:2},
  {name:'H',point:4},
  {name:'J',point:8},
  {name:'K',point:5},
  {name:'L',point:1},
  {name:'M',point:3},
  {name:'N',point:1},
  {name:'P',point:3},
  {name:'Q',point:10},
  {name:'R',point:1},
  {name:'S',point:1},
  {name:'T',point:1},
  {name:'V',point:4},
  {name:'W',point:4},
  {name:'X',point:8},
  {name:'Y',point:4},
  {name:'Z',point:10}
];

const vocal = [
  {name:'A',point:1},
  {name:'E',point:1},
  {name:'I',point:1},
  {name:'O',point:1},
  {name:'U',point:1},
];

const pickRandom1 = (arr,count) => {
  let _arr = [...arr];
  return[...Array(count)].map( ()=> _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]); 
};

const pickRandom2 = (arr,count) => {
  let _arr = [...arr];
  return[...Array(count)].map( ()=> _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]); 
};

randomConsonant = pickRandom1(consonant, 6);
randomVocal = pickRandom2(vocal, 2);
merge = randomConsonant.concat(randomVocal);
console.log(merge);

const pickRandom = (arr,count) => {
  let _arr = [...arr];
  return[...Array(count)].map( ()=> _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]); 
};

randomLetters = pickRandom(merge, 8);

randomLetters.forEach(letter => {
  const button = document.createElement('button');
  const sup = document.createElement('sup');
  button.setAttribute('name', letter.name);
  button.setAttribute('point', letter.point);
  button.setAttribute('addedtoboard', 'false');
  sup.textContent = `${letter.point}`;
  button.textContent = `${letter.name}`;
  button.appendChild(sup);
  letterWrapper.appendChild(button);

  const img = document.createElement('img');
  img.setAttribute('name', letter.name);
  img.setAttribute('point', letter.point);
  img.setAttribute('src', `../asset/${letter.name}.jpeg`);
  img.setAttribute('width', '23');
  img.setAttribute('height', '23');
  img.setAttribute('draggable', 'true');
  img.setAttribute('ondragstart', 'drag(event)');
  img.setAttribute('id',`drag${letter.name}`);
  letterWrapper.appendChild(img);
});
