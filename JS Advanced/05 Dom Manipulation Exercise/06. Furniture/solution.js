function solve() {
// Непосилна за мен задача, на този етап *

  // select input fields
  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  // console.log(input, output);

  // select table
  const table = document.querySelector('table.table tbody');

  // select all buttons
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  // console.log(generate, buy);

  // configure event listeners 

  // first button -| table generation
  generateBtn.addEventListener('click', generate);

  // second button -| buy furniture
  buyBtn.addEventListener("click", buy);

  // table generation 
  function generate(ev) {

    // read input JSON and parse it
    const data = JSON.parse(input.value);
    // console.log(data);

    // for every array element, create table row
    for (let item of data) {

      const row = document.createElement("tr");
      const imgCell = document.createElement("td");
      const nameCell = document.createElement("td");
      const priceCell = document.createElement("td");
      const decFactorCell = document.createElement("td");
      const checkCell = document.createElement("td");

      const img = document.createElement("img");
      img.src = item.img;
      imgCell.appendChild(img);

      const nameP = document.createElement("p");
      nameP.textContent = item.name;
      nameCell.appendChild(nameP);

      const priceP = document.createElement("p");
      priceP.textContent = item.price;
      priceCell.appendChild(priceP);

      const decP = document.createElement("p");
      decP.textContent = item.decFactor;
      decFactorCell.appendChild(decP);

      const check = document.createElement("input");
      check.type = "checkbox";
      checkCell.appendChild(check);

      row.appendChild(imgCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(decFactorCell);
      row.appendChild(checkCell);

      table.appendChild(row);

    }

  }

    // buy furniture 
  function buy(ev) {

    // select all checkboxes  and  filter only checked checkboxes
    const furniture = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(b => b.parentElement.parentElement).map(r => ({
      name: r.children[1].textContent,
      price: Number(r.children[2].textContent),
      decFactor: Number(r.children[3].textContent)
    }));
    // console.log(boxes);
    // repeat for every selected checkbox
    // -- select paren row
    
    const names = [];
    let total = 0;
    let decFactor = 0;

    for (let item of furniture) {
      // -- read item info
      total += item.price;
      decFactor += item.decFactor
      names.push(item.name);
    }

    const result = `Bought furniture: ${names.join(', ')}\nTotal price: ${total.toFixed(2)}\nAverage decoration factor: ${(decFactor / names.length).toFixed(2)}`;

    // display output
    output.value = result;

  }

}


// ---------------------------------------------------------------------------------------------------------------------------------------

/*

function solve() {

  // select input fields
  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  // console.log(input, output);

  // select table
  const table = document.querySelector('table.table tbody');

  // select all buttons
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  // console.log(generate, buy);

  // configure event listeners 

  // first button -| table generation
  generateBtn.addEventListener('click', generate);

  // second button -| buy furniture
  buyBtn.addEventListener("click", buy);

  // table generation 
  function generate(ev) {

    // read input JSON and parse it
    const data = JSON.parse(input.value);
    // console.log(data);

    // for every array element, create table row
    for (let item of data) {

      const row = document.createElement("tr");

      row.appendChild(createCell("img", {src: item.img}));
      row.appendChild(createCell("p", {}, item.name));
      row.appendChild(createCell("p", {}, item.price));
      row.appendChild(createCell("p", {}, item.decFactor));
      row.appendChild(createCell("input", {type: 'checkbox'}));

      table.appendChild(row);

    }

  }

  function createCell(nestedTag, props, content) {
    const cell = document.createElement("td");
    const nested = document.createElement(nestedTag);

    for (let prop in props) {
      nested[prop] = props[prop];
    }
    if (content) {
      nested.textContent = content;
    }

    cell.appendChild(nested);

    return cell;

  }

    // buy furniture 
  function buy(ev) {

    // select all checkboxes  and  filter only checked checkboxes
    const furniture = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(b => b.parentElement.parentElement).map(r => ({
      name: r.children[1].textContent,
      price: Number(r.children[2].textContent),
      decFactor: Number(r.children[3].textContent)
    }));
    // console.log(boxes);
    // repeat for every selected checkbox
    // -- select paren row
    
    const names = [];
    let total = 0;
    let decFactor = 0;

    for (let item of furniture) {
      // -- read item info
      total += item.price;
      decFactor += item.decFactor
      names.push(item.name);
    }

    const result = `Bought furniture: ${names.join(', ')}\nTotal price: ${total.toFixed(2)}\nAverage decoration factor: ${(decFactor / names.length).toFixed(2)}`;

    // display output
    output.value = result;

  }

}

*/