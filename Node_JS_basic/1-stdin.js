process.stdout.write('Welcome to Holberton School, what is your name?\r\n');
process.stdin.setEncoding('utf8');

// Traite la saisie
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.trim()}\r\n`);
});

// Gère la fin d'entrée (Ctrl+D ou fin du pipe)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\r\n');
});

process.stdin.resume();
