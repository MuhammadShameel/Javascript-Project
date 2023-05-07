var Students = [
  { name: "Hammad", age: 17, class: "10th" },
  { name: "Abdul Rafay", age: 11, class: "3rd" },
  { name: "Huzaifa", age: 8, class: "2nd" },
  { name: "Laraib", age: 16, class: "9th" },
];
var Teachers = [
  { name: "Sir Bilal", age: 27, subjects: "English" },
  { name: "Sir Areeb", age: 21, subjects: "Chemistry" },
  { name: "Sir Nabeel", age: 28, subjects: "Physics" },
  { name: "Sir Habeeb", age: 26, subjects: "Urdu" },
];

function renderTable(items, elementId) {
  var container = document.getElementById(elementId);
  container.className = "table table-striped";
  var table = document.createElement("table");
  var tableHead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  Object.keys(items[0]).forEach(function (key) {
    var headerCell = document.createElement("th");
    headerCell.className = "text-center p-2";
    headerCell.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    headerRow.appendChild(headerCell);
  });
  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);
  var tableBody = document.createElement("tbody");
  items.forEach(function (item, index) {
    var row = document.createElement("tr");
    row.className = "text-center";
    Object.keys(item).forEach(function (key) {
      var cell = document.createElement("td");
      cell.className = "p-2";
      cell.textContent = item[key];
      row.appendChild(cell);
    });
    var deleteCell = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-secondary btn-sm";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      items.splice(index, 1);
      container.removeChild(table);
      renderTable(items, elementId);
    });
    var editCell = document.createElement("td");
    var editButton = document.createElement("button");
    editButton.className = "btn btn-secondary btn-sm";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
      var editRow = document.createElement("tr");
      editRow.className = "text-center";
      Object.keys(item).forEach(function (key) {
        var editCell = document.createElement("td");
        editCell.className = "p-2";
        var editInput = document.createElement("input");
        editInput.value = item[key];
        editCell.appendChild(editInput);
        editRow.appendChild(editCell);
      });
      var saveCell = document.createElement("td");
      var saveButton = document.createElement("button");
      saveButton.className = "btn btn-secondary btn-sm";
      saveButton.textContent = "Save";
      saveButton.addEventListener("click", function () {
        var editInputs = editRow.querySelectorAll("input");
        editInputs.forEach(function (editInput, i) {
          item[Object.keys(item)[i]] = editInput.value;
        });
        container.removeChild(table);
        renderTable(items, elementId);
      });
      saveCell.appendChild(saveButton);
      editRow.appendChild(saveCell);
      if (row.parentNode) {
        row.parentNode.insertBefore(editRow, row.nextSibling);
        row.style.display = "none";
      }
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);
    editCell.appendChild(editButton);
    row.appendChild(editCell);
    tableBody.appendChild(row);
  });
  table.appendChild(tableBody);
  container.appendChild(table);
}
renderTable(Students, "students-table");
renderTable(Teachers, "teachers-table");
