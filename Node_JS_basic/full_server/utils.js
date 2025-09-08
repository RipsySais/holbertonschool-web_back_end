import fs from 'fs';

export function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      const lines = data.split('\n').filter(line => line.trim() !== '');
      const students = lines.slice(1)
        .map(line => line.split(','))
        .filter(fields => fields.length === lines[0].split(',').length && fields[0] !== '');

      const fields = {};
      students.forEach(student => {
        const field = student[student.length - 1];
        if (!fields[field]) fields[field] = [];
        fields[field].push(student[0]);
      });

      resolve(fields);
    });
  });
}
