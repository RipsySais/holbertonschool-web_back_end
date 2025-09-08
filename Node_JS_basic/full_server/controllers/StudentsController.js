import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    const dbFile = process.argv[2];
    try {
      const fields = await readDatabase(dbFile);
      let responseText = 'This is the list of our students\n';
      const sortedFields = Object.keys(fields).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      let total = 0;
      sortedFields.forEach(field => {
        total += fields[field].length;
      });
      responseText += `Number of students: ${total}\n`;

      for (const field of sortedFields) {
        responseText += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }
      res.status(200).send(responseText.trim());
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const dbFile = process.argv[2];
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const fields = await readDatabase(dbFile);
      if (!fields[major]) {
        res.status(200).send('List: ');
        return;
      }
      res.status(200).send(`List: ${fields[major].join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
