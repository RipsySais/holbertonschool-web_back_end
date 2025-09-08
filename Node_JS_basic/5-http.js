// 5-http.js
const http = require('http');
const fs = require('fs');

const database = process.argv[2]; // Lecture du nom de fichier csv passé en argument

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    if (!database) {
      res.statusCode = 500;
      res.end('Cannot load the database');
      return;
    }
    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Cannot load the database');
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

      res.statusCode = 200;
      res.end(responseText.trim());
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
