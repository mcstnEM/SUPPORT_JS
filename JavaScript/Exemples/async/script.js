/* 
Ici pas de fonction async, on utilise directement le await pour attendre le résultat d'une promesse, c'est ce qu'on appelle le "top level await".

Pour l'activer, vous pouvez indiquer type="module" dans votre balise html <script type="module" scr="./script.js">.

Dans une application nodeJS, soi vous renomez les extensions .js en .mjs, soi vous l'indiquez dans le package.json : "type": "module"
*/
const response = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        return res.json()
    });

console.log(response)