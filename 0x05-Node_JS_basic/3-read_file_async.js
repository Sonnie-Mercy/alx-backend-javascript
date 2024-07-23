const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      lines.shift(); // Remove the header line
      const students = {};
      let totalStudents = 0;

      for (const line of lines) {
        const [firstname, , , field] = line.split(','); // Ignore 'lastname' and 'age'
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
        totalStudents += 1; // Use '+=' instead of '++'
      }

      console.log(`Number of students: ${totalStudents}`);
      for (const field in students) {
        if (Object.prototype.hasOwnProperty.call(students, field)) { // Guard for-in loop
          const count = students[field].length;
          const list = students[field].join(', ');
          console.log(`Number of students in ${field}: ${count}. List: ${list}`);
        }
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
