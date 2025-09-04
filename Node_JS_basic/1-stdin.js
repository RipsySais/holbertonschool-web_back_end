// 1-stdin.js

const readline = require('readline');

// Créez une interface pour l'entrée et la sortie
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Affiche le message de bienvenue
console.log('Welcome to Holberton School, what is your name?');

// Demande à l'utilisateur d'entrer son nom
rl.question('', (input) => {
    if (input.trim()) {
        console.log(`Your name is: ${input}`);
    } else {
        console.log('Your name is: ');  // Affiche une ligne vide si aucun nom n'est saisi
    }
    rl.close(); // Ferme l'interface de lecture après avoir obtenu l'entrée
});

// Lorsque l'interface de lecture se ferme, affiche le message de fermeture
rl.on('close', () => {
    console.log('This important software is now closing');
});
