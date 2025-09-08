// 7-http_express.js
const express = require('express');
const fs = require('fs');

const database = process.argv[2]; // Nom du fichier csv passé en argument

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.type('text/plain');

  if (!database) {
    res.status(500).send('Cannot load the database');
    return;
  }

  fs.readFile(database, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Cannot load the database');
      return;
    }

    const lines = data.split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1)
      .map(line => line.split(','))
      .filter(fields => fields.length === lines[0].split(',').length && fields[0] !== '');

    const total = students.length;

    let responseText = 'This is the list of our students\n';
    responseText += `Number of students: ${total}\n`;

    const fields = {};
    students.forEach(student => {
      const field = student[student.length - 1];
      if (!fields[field]) fields[field] = [];
      fields[field].push(student[0]);
    });

    for (const field in fields) {
      if (Object.hasOwnProperty.call(fields, field)) {
        responseText += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }
    }

    res.send(responseText.trim());
  });
});

app.listen(1245);

module.exports = app;
