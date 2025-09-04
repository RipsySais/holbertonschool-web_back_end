process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

// Lorsqu'on reçoit une donnée sur stdin
process.stdin.on('data', (data) => {
  const name = data.trim();
  process.stdout.write(`Your name is: ${name}\n`);
});

// Lorsqu'on termine stdin (ex: echo "John" | node 1-stdin.js, ou Ctrl+D)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

// Nécessaire pour le mode pipe
process.stdin.resume();
