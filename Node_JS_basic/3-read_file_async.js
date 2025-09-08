// 3-read_file_async.js
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length === 0) {
        console.log('Number of students: 0');
        resolve();
        return;
      }
      // Enlève l'en-tête
      const students = lines.slice(1)
        .map((line) => line.split(','))
        .filter((fields) => fields.length === lines[0].split(',').length && fields[0] !== '');

      const total = students.length;
      console.log(`Number of students: ${total}`);

      const fields = {};
      students.forEach((student) => {
        const field = student[student.length - 1];
        if (!fields[field]) fields[field] = [];
        fields[field].push(student[0]);
      });

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
      resolve();
    });
  });
}

module.exports = countStudents;
