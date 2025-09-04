const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    if (lines.length < 2) {
      console.log('Number of students: 0');
      return;
    }
    const students = lines.slice(1).map(line => line.split(','));
    const fields = {};
    let total = 0;
    for (const student of students) {
      if (student.length < 4) continue;
      const firstname = student[0].trim();
      const field = student[3].trim();
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
      total++;
    }
    console.log(`Number of students: ${total}`);
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
