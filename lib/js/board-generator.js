const wrapper = document.querySelector("#board");
const table = document.createElement("table");
const tbody = document.createElement("tbody");

table.style.width = '80%';
table.style.height = '100%';
table.style.background = 'lightblue';
table.setAttribute('border', '1');

for (let i = 0; i < 15; i++) {
  const tr = document.createElement('tr');
  tr.style.height = '33px';
  for (let j = 0; j < 15; j++) {
    const td = document.createElement('td');
    td.setAttribute('id','index['+i+"]"+"["+j+"]")
    td.setAttribute('ondrop','drop(event)')
    td.setAttribute('ondragover','allowDrop(event)')
    td.setAttribute('width','28') 
    td.setAttribute('align','center')
    td.appendChild(document.createTextNode('\u0020'));
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}

table.appendChild(tbody);
wrapper.appendChild(table);