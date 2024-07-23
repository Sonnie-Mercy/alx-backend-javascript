const express = require('express');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const app = express();
const PORT = 1245;
const readFileAsync = promisify(fs.readFile);

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const filePath = process.argv[2]; // Get the file path from command line argument

  if (!filePath) {
    return res.status(500).send('Cannot load the database');
  }

  try {
    const data = await readFileAsync(filePath, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const header = lines.shift();
    const students = {};
    let totalStudents = 0;

    for (const line of lines) {
      const [firstname, lastname, age, field] = line.split(',');
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
      totalStudents++;
    }

    let responseText = `This is the list of our students\nNumber of students: ${totalStudents}\n`;

    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        const count = students[field].length;
        const list = students[field].join(', ');
        responseText += `Number of students in ${field}: ${count}. List: ${list}\n`;
      }
    }

    res.send(responseText.trim());
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(PORT, () => {});

module.exports = app;
