// 1-stdin.js

/**
 * Programme qui demande le nom de l'utilisateur et l'affiche
 */

// Affiche le message d'accueil
process.stdout.write("Welcome to Holberton School, what is your name?\n");

// Écoute l'entrée de l'utilisateur
process.stdin.on("data", (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
});

// Lorsque le programme se termine (Ctrl+D ou pipe terminé)
process.on("exit", () => {
  console.log("This important software is now closing");
});
