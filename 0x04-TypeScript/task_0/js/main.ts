export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
   firstName: "Mercy",
   lastName: "Sonnie",
   age: 30,
   location: "Gilgil, Kenya",
};
const student2: Student ={
    firstName: "Tara",
    lastName: "Acharya",
    age: 28,
    location: "Bodhgaya, India"
};
const studentsList: Array<Student> = [student1, student2,];
function renderTable(students: Student[]) {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    students.forEach(student => {
        const row = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        const locationCell = document.createElement('td');

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);

        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
}

renderTable(studentsList);