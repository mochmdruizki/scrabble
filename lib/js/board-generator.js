const wrapper = document.querySelector("#board");
const table = document.createElement("table");
const tbody = document.createElement("tbody");

table.style.width = '80%';
table.style.height = '100%';
table.style.background = '#decd5d';
table.setAttribute('border', '1');

for (let i = 0; i < 15; i++) {
  const tr = document.createElement('tr');
  tr.style.height = '33px';
  for (let j = 0; j < 15; j++) {
    const td = document.createElement('td');

    if (i == 7 && j == 7) {
      td.style.background = '#af77e0'
      td.classList.add('centerstar')
    }

    //double word score
    if((i == 1) && ((j == 1) || (j == 13))
        || (i == 13) && ((j == 1) || (j == 13))
        || (i == 2) && ((j == 2) || (j == 12))
        || (i == 12) && ((j == 2) || (j == 12))
        || (i == 3) && ((j == 3) || (j == 11))
        || (i == 11) && ((j == 3) || (j == 11))
        || (i == 4) && ((j == 4) || (j == 10))
        || (i == 10) && ((j == 4) || (j == 10))){
          td.style.background = 'salmon'
          td.classList.add('dw')
        }

    //triple word score
    if((i == 0 && (j == 0 || j == 7 || j == 14)) 
        || (i == 14 && (j == 0 || j == 7 || j == 14))
        || (j == 0 && (i == 0 || i == 7 || i == 14)) 
        || (j == 14 && (i == 0 || i == 7 || i == 14))){
          td.style.background = 'red'
          td.classList.add('tw')
        }

    //double letter score
    if((i == 0 && (j == 3 || j == 11)) 
        || (i == 14 && (j == 3 || j == 11))
        || (j == 0 && (i == 3 || i == 11))
        || (j == 14 && (i == 3 || i == 11)) 
        ||(i == 6) && ((j == 6) || (j == 8))
        || (i == 8) && ((j == 6) || (j == 8))
        || (i == 2) && ((j == 6) || (j == 8))
        || (i == 3) && (j == 7)
        || (i == 12) && ((j == 6) || (j == 8))
        || (i == 11) && (j == 7)
        || (j == 2) && ((i == 6) || (i == 8))
        || (j == 3) && (i == 7)
        || (j == 12) && ((i == 6) || (i == 8))
        || (j == 11) && (i == 7)){
          td.style.background = 'lightblue'
          td.classList.add('dl')
        }

    //triple letter score
    if((i == 5) && ((j == 5) || (j == 9))
    || (i == 9) && ((j == 5) || (j == 9))
    || (i == 1) && ((j == 5) || (j == 9))
    || (i == 13) && ((j == 5) || (j == 9))
    || (j == 1) && ((i == 5) || (i == 9))
    || (j == 13) && ((i == 5) || (i == 9))){
      td.style.background = 'blue'
      td.classList.add('tl')
    }

    td.setAttribute('ondrop','drop(event)')
    td.setAttribute('ondragover','allowDrop(event)')
    td.setAttribute('width','28') 
    td.setAttribute('align','center')
    td.appendChild(document.createTextNode('\u0020'));
    // i == 7 && j == 7 ? td.style.backgroundColor = 'red' : null;
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}

table.appendChild(tbody);
wrapper.appendChild(table);