const message = "  aaasldkqldqaaaa  dkkdjfkdfjaaaa  ";

// Utilisation de replace() avec une regex pour supprimer tout les espaces et transformation en tableau de message
const chars = message.replace(/\s/g, '').split('')

const countChar = chars.reduce((acc, char) => {
  // Si acc[char] exist, faire + 1, sinon, définir sur 1
  acc[char] = acc[char] ? acc[char] + 1 : 1;
  // retourner l'objet acc mise à jour
  return acc;
  
}, {})

console.log(countChar)