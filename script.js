// 1. Create An Array Of Students.
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

// 2.Create a function named renderTable.
let rederTable = function (items) {
  // 3. Create table dynamically .
  let container = document.querySelector("#table");
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  items.forEach((item, index) => {
    if (index === 0) {
      let row = document.createElement("tr");
      for (let itemKey in item) {
        let cell = document.createElement("td");
        let textNode = document.createTextNode(itemKey);
        cell.appendChild(textNode);
        row.appendChild(cell);
        table.appendChild(row);
      }
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
    deleteButton.innerText = "Delete";
    deleteCell.appendChild(deleteButton);
    rowEl.appendChild(deleteCell);
    deleteButton.addEventListener("click", function () {
      this.parentNode.parentNode.remove();
    });
    tbody.appendChild(rowEl);
  });
  table.appendChild(thead);
  table.appendChild(tbody);
  container.appendChild(table);
};

// 4. calling function.
rederTable(teachersOne);
