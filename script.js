// 1. Create An Array Of Students.
let studentsOne = [
  { name: "Hammad", age: 17 },
  { name: "Abdul Rafay", age: 11 },
  { name: "Huzaifa", age: 8 },
  { name: "Laraib", age: 16 },
];

let teachersOne = [
  { name: "Sir Bilal", age: 27, salary: 200 },
  { name: "Sir Areeb", age: 21 },
  { name: "Sir Nabeel", age: 28 },
  { name: "Sir Habeeb", age: 26 },
];

// 2.Create a function named renderTable.
let rederTable = function (items) {
  // 3. Create table dynamically .
  let container = document.querySelector("#table");
  let table = document.createElement("table");
  items.ForEach((obj) => {
    let row = document.createElement("tr");
    for (let objKey in obj) {
      let cell = document.createElement("td");
      let textNode = document.createTextNode(obj[objKey]);
      cell.appendChild(textNode);
      row.appendChild(cell);
    }
    table.appendChild(row);
  });
  container.appendChild(table);
};

// 4. calling function.
rederTable(teachersOne);
