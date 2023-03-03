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
  let container = document.querySelector(elementId);
  let table = document.createElement("table");
  table.className = "table table-active";
  let thead = document.createElement("thead");
  thead.className = "table-dark";
  let tbody = document.createElement("tbody");

  items.forEach((item, index) => {
    if (index === 0) {
      let row = document.createElement("tr");
      for (let itemKey in item) {
        let cell = document.createElement("td");
        cell.innerText = itemKey.charAt(0).toUpperCase() + itemKey.slice(1);
        row.appendChild(cell);
        table.appendChild(row);
      }
      let actionHeader = document.createElement("td");
      actionHeader.innerText = "Action";
      row.appendChild(actionHeader);
      thead.appendChild(row);
    }
    let rowEl = document.createElement("tr");
    for (let itemKey in item) {
      let cellEl = document.createElement("td");
      let textNode = document.createTextNode(item[itemKey]);
      cellEl.appendChild(textNode);
      rowEl.appendChild(cellEl);
    }

    let actionCell = document.createElement("td");
    let editButton = document.createElement("button");
    editButton.className = "btn btn-outline-primary me-md-3";
    editButton.innerText = "Edit";
    let saveButton = document.createElement("button");
    saveButton.className = "btn btn-outline-success me-md-3 ";
    saveButton.innerText = "Save";
    saveButton.style.display = "none";
    actionCell.appendChild(editButton);
    actionCell.appendChild(saveButton);

    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-outline-danger ";
    deleteButton.innerText = "Delete";
    actionCell.appendChild(deleteButton);
    rowEl.appendChild(actionCell);
    deleteButton.addEventListener("click", function () {
      items.splice(index, 1);
      container.removeChild(table);
      renderTable(items, elementId);
    });

    editButton.addEventListener("click", function () {
      Array.from(rowEl.children).forEach((cell, i) => {
        if (i < rowEl.children.length - 1) {
          let input = document.createElement("input");
          input.type = "text";
          input.value = cell.innerText;
          cell.innerText = "";
          cell.appendChild(input);
        }
      });
      editButton.style.display = "none";
      saveButton.style.display = "inline";
    });

    saveButton.addEventListener("click", function () {
      Array.from(rowEl.children).forEach((cell, i) => {
        if (i < rowEl.children.length - 1) {
          let input = cell.firstChild;
          cell.innerText = input.value;
        }
      });
      saveButton.style.display = "none";
      editButton.style.display = "inline";
    });

    tbody.appendChild(rowEl);
  });
  table.appendChild(thead);
  table.appendChild(tbody);
  container.appendChild(table);
};

renderTable(teachersOne, "#table");
renderTable(studentsOne, "#tableTwo");
