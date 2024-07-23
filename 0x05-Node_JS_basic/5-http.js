const http = require('http');
const fs = require('fs');

const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    lines.shift();
    const students = {};
    let totalStudents = 0;

    for (const line of lines) {
      const [firstname, , , field] = line.split(',');
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
      totalStudents += 1;
    }

    let response = `Number of students: ${totalStudents}\n`;
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        const count = students[field].length;
        const list = students[field].join(', ');
        response += `Number of students in ${field}: ${count}. List: ${list}\n`;
      }
    }

    resolve(response.trim());
  });
});

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databaseFile = process.argv[2];
    countStudents(databaseFile)
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        res.end(data);
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 1245;
app.listen(PORT, () => {});

module.exports = app;
