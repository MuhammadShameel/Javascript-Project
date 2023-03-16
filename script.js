// 1. Create An Array Of Students.
let studentsOne = [
  { Name: "Hammad", Age: 17, Class: "10th" },
  { Name: "Abdul Rafay", Age: 11, Class: "3rd" },
  { Name: "Huzaifa", Age: 8, Class: "2nd" },
  { Name: "Laraib", Age: 16, Class: "9th" },
];

let teachersOne = [
  { Name: "Sir Bilal", Age: 27, Subjects: "English" },
  { Name: "Sir Areeb", Age: 21, Subjects: "Chemistry" },
  { Name: "Sir Nabeel", Age: 28, Subjects: "Physics" },
  { Name: "Sir Habeeb", Age: 26, Subjects: "Urdu" },
];

// 2.Create a function named renderTable.
let rederTable = function (items) {
  // 3. Create table dynamically .
  let container = document.querySelector("#table");
  let table = document.createElement("table");

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
    }
    let rowEl = document.createElement("tr");
    for (let itemKey in item) {
      let cellEl = document.createElement("td");
      let textNode = document.createTextNode(item[itemKey]);
      cellEl.appendChild(textNode);
      rowEl.appendChild(cellEl);
    }
    table.appendChild(rowEl);
  });

  container.appendChild(table);
};

// 4. calling function.
rederTable(teachersOne);
