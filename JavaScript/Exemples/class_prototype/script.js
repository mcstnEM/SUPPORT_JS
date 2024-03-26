/* 
Héritage/Chaînage des prototypes

Dans cette example on utilise console.dir() qui nous permet de voir de manière hiérarchique l'hériatge d'un objet.

Si on déroule toute la liste, on remarquera que l'héritage de h1 ressemble à quelque chose comme ça :

    h1 > HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object

Le DOM est constituer d'objets qui héritent des prototype parent, grand-parent, etc...
*/

const h1 = document.querySelector('h1');

console.dir(h1);

// Object.getPrototypeOf() nous permet de retourner directement le prototype de l'objet mis en argument. On a aussi la propriété __proto__, mais son utilisation est déprécié. Pour des questions de standard et de compatibilité.
console.dir(Object.getPrototypeOf(h1));