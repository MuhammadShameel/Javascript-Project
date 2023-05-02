interface Student {
  name: string;
  age: number;
  class: string;
  [key: string]: any;
}

interface Teacher {
  name: string;
  age: number;
  subjects: string;
  [key: string]: any;
}

const students: Student[] = [
  { name: "Hammad", age: 17, class: "10th" },
  { name: "Abdul Rafay", age: 11, class: "3rd" },
  { name: "Huzaifa", age: 8, class: "2nd" },
  { name: "Laraib", age: 16, class: "9th" },
];

const teachers: Teacher[] = [
  { name: "Sir Bilal", age: 27, subjects: "English" },
  { name: "Sir Areeb", age: 21, subjects: "Chemistry" },
  { name: "Sir Nabeel", age: 28, subjects: "Physics" },
  { name: "Sir Habeeb", age: 26, subjects: "Urdu" },
];

function renderTable(items: any[], elementId: string) {
  const container = document.getElementById(elementId) as HTMLElement;
  container.className = "table table-striped";
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  Object.keys(items[0]).forEach((key) => {
    const headerCell = document.createElement("th");
    headerCell.className = "text-center p-2";
    headerCell.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    headerRow.appendChild(headerCell);
  });
  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);

  const tableBody = document.createElement("tbody");
  items.forEach((item: any, index: number) => {
    const row = document.createElement("tr");
    row.className = "text-center";
    Object.keys(item).forEach((key) => {
      const cell = document.createElement("td");
      cell.className = "p-2";
      cell.textContent = item[key];
      row.appendChild(cell);
    });

    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-secondary btn-sm";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      items.splice(index, 1);
      container.removeChild(table);
      renderTable(items, elementId);
    });

    const editCell = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.className = "btn btn-secondary btn-sm";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      const editRow = document.createElement("tr");
      editRow.className = "text-center";
      Object.keys(item).forEach((key) => {
        const editCell = document.createElement("td");
        editCell.className = "p-2";
        const editInput = document.createElement("input");
        editInput.value = item[key];
        editCell.appendChild(editInput);
        editRow.appendChild(editCell);
      });

      const saveCell = document.createElement("td");
      const saveButton = document.createElement("button");
      saveButton.className = "btn btn-secondary btn-sm";
      saveButton.textContent = "Save";
      saveButton.addEventListener("click", () => {
        const editInputs = editRow.querySelectorAll("input");
        editInputs.forEach((editInput, i) => {
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

renderTable(students, "students-table");
renderTable(teachers, "teachers-table");
