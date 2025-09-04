// Affiche le message d'accueil
process.stdout.write("Welcome to Holberton School, what is your name?\n");

// Écoute l'entrée de l'utilisateur
process.stdin.on("data", (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
});

// Écoute la fin de l'entrée (par exemple, Ctrl+D ou fin de l'entrée pipée)
process.stdin.on('end', () => {
  process.stdout.write("This important software is now closing\n");
});

// Résume le processus stdin pour recevoir les entrées
process.stdin.resume();
