let studentsOne = [
  { name: "Hammad", age: 17, class: "10th" },
  { name: "Abdul Rafay", age: 11, class: "3rd" },
  { name: "Huzaifa", age: 8, class: "2nd" },
  { name: "Laraib", age: 16, class: "9th" },
];

let teachersOne = [
  { name: "Sir Bilal", age: 27, subjects: "English" },
  { name: "Sir Areeb", age: 21, subjects: "Chemistry" },
  { name: "Sir Nabeel", age: 28, subjects: "Physics" },
  { name: "Sir Habeeb", age: 26, subjects: "Urdu" },
];

let renderTable = function (items, elementId) {
  // document.getElementById(elementId);
  let container = document.querySelector(elementId);
  console.log(container);
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  items.forEach((item, index) => {
    if (index === 0) {
      let row = document.createElement("tr");
      for (let itemKey in item) {
        let cell = document.createElement("td");
        cell.innerText = itemKey;
        row.appendChild(cell);
        table.appendChild(row);
      }
      let deleteHeader = document.createElement("td");
      deleteHeader.innerText = "Action";
      row.appendChild(deleteHeader);
      thead.appendChild(row);
      thead.appendChild(row);
    }
    let rowEl = document.createElement("tr");
    for (let itemKey in item) {
      let cellEl = document.createElement("td");
      let textNode = document.createTextNode(item[itemKey]);
      cellEl.appendChild(textNode);
      rowEl.appendChild(cellEl);
    }
    let deleteCell = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-outline-danger";
    deleteButton.innerText = "Delete";
    deleteCell.appendChild(deleteButton);
    rowEl.appendChild(deleteCell);

    deleteButton.addEventListener("click", function () {
      items.splice(index, 1);
      container.removeChild(table);
      renderTable(items, elementId);
    });
    tbody.appendChild(rowEl);
  });
  table.appendChild(thead);
  table.appendChild(tbody);
  container.appendChild(table);
};

renderTable(teachersOne, "#table");
renderTable(studentsOne, "#tableTwo");
