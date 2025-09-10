interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: "Alice", lastName: "Dupont", age: 22, location: "Paris" };
const student2: Student = { firstName: "Bob", lastName: "Martin", age: 24, location: "Lyon" };
const studentsList: Student[] = [student1, student2];

console.log("✅ main.ts chargé");

const table: HTMLTableElement = document.createElement("table");
table.innerHTML = `
  <thead>
    <tr><th>First Name</th><th>Location</th></tr>
  </thead>
  <tbody></tbody>
`;
const tbody = table.querySelector("tbody") as HTMLTableSectionElement;

studentsList.forEach((s) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${s.firstName}</td><td>${s.location}</td>`;
  tbody.appendChild(tr);
});

document.body.appendChild(table);
