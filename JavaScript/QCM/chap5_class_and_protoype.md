### QCM 1: Classes en JavaScript et l'Héritage

1. Qu'est-ce qu'une classe en JavaScript ?
   - [ ] A) Une fonction spéciale pour créer des objets
   - [ ] B) Un sucre syntaxique pour le système de prototypes
   - [ ] C) Un nouveau type de données
   - [ ] D) Une structure de contrôle

2. Comment définit-on une classe en JavaScript ?
   - [ ] A) En utilisant le mot-clé `function`
   - [ ] B) En utilisant le mot-clé `prototype`
   - [ ] C) En utilisant le mot-clé `class`
   - [ ] D) En utilisant le mot-clé `new`

3. À quoi sert le mot-clé `extends` dans une déclaration de classe ?
   - [ ] A) À créer une nouvelle instance de la classe
   - [ ] B) À dupliquer une classe
   - [ ] C) À hériter d'une autre classe
   - [ ] D) À initialiser une classe

4. Que fait la fonction `super` dans un constructeur de sous-classe ?
   - [ ] A) Elle appelle une méthode de la classe parente
   - [ ] B) Elle crée une super-classe
   - [ ] C) Elle appelle le constructeur de la classe parente
   - [ ] D) Elle vérifie les permissions

5. Comment surcharger une méthode héritée ?
   - [ ] A) En l'appelant directement
   - [ ] B) En la redéfinissant dans la classe enfant
   - [ ] C) En utilisant `super.method()`
   - [ ] D) En modifiant le prototype de la classe parente

6. Quel est le résultat de l'héritage en JavaScript ?
   - [ ] A) Une copie exacte de la classe parente
   - [ ] B) Une relation directe entre deux fonctions
   - [ ] C) La possibilité de partager des propriétés et méthodes entre classes
   - [ ] D) Une limitation dans la création d'objets

7. Comment peut-on accéder à une méthode de la classe parente depuis une classe enfant ?
   - [ ] A) En utilisant `parent.method()`
   - [ ] B) En utilisant `super.method()`
   - [ ] C) En utilisant `this.method()`
   - [ ] D) En utilisant `method()`

8. Quelle est la principale utilité des classes en JavaScript ?
   - [ ] A) Pour créer des interfaces graphiques
   - [ ] B) Pour effectuer des calculs complexes
   - [ ] C) Pour simplifier la création et la gestion des objets
   - [ ] D) Pour augmenter la performance du code

9. Que se passe-t-il si on oublie d'appeler `super` dans un constructeur de sous-classe ?
   - [ ] A) Le constructeur de la classe parente est appelé automatiquement
   - [ ] B) Une erreur est générée
   - [ ] C) Les propriétés de la classe parente ne sont pas initialisées
   - [ ] D) B et C sont correctes

10. Peut-on avoir des méthodes statiques dans une classe JavaScript ?
    - [ ] A) Non, JavaScript ne supporte pas les méthodes statiques
    - [ ] B) Oui, mais elles ne peuvent pas accéder à `this` ou à des méthodes non statiques
    - [ ] C) Oui, et elles peuvent accéder à `this` et à d'autres méthodes statiques
    - [ ] D) Oui, mais elles ne sont pas héritées par les sous-classes

### QCM 2: Objets et Prototypes

1. Que représente le prototype en JavaScript ?
   - [ ] A) Une copie de tous les objets
   - [ ] B) Un modèle pour créer de nouveaux objets
   - [ ] C) Un objet parent dont d'autres objets peuvent hériter des propriétés et méthodes
   - [ ] D) Une méthode pour dupliquer des fonctions

2. Comment peut-on créer un nouvel objet qui hérite d'un prototype spécifique en JavaScript ?
   - [ ] A) En utilisant la méthode `new Prototype()`
   - [ ] B) En utilisant la méthode `Object.create(prototypeObjet)`
   - [ ] C) En déclarant une nouvelle classe
   - [ ] D) En utilisant `prototype = new Object()`

3. Quel est le principal avantage de l'utilisation des prototypes pour ajouter des méthodes aux constructeurs JavaScript ?
   - [ ] A) Cela réduit la quantité de mémoire utilisée par les applications
   - [ ] B) Cela augmente la vitesse d'exécution du code
   - [ ] C) Cela permet de créer des méthodes privées
   - [ ] D) Cela rend le code plus facile à écrire

4. Quelle est la différence principale entre une fonction constructeur et une classe en JavaScript ?
   - [ ] A) Les fonctions constructeur ne peuvent pas utiliser le mot-clé `this`
   - [ ] B) Les classes sont des fonctions constructeur avec une syntaxe plus claire
   - [ ] C) Les fonctions constructeur ne permettent pas l'héritage
   - [ ] D) Les classes ne peuvent pas avoir de propriétés statiques

5. Comment appelle-t-on une fonction en spécifiant explicitement le contexte `this` en JavaScript ?
   - [ ] A) Avec la méthode `apply()`
   - [ ] B) Avec la méthode `bind()`
   - [ ] C) Avec la méthode `call()`
   - [ ] D) Avec la méthode `function()`

6. Quel est l'effet de l'utilisation du mot-clé `new` avec une fonction en JavaScript ?
   - [ ] A) Il crée une nouvelle instance de la fonction
   - [ ] B) Il convertit la fonction en une classe
   - [ ] C) Il crée un nouvel objet basé sur le prototype de la fonction
   - [ ] D) Il exécute la fonction immédiatement

7. Comment éviter l'effet de bord de `this` dans les fonctions de rappel en JavaScript ?
   - [ ] A) En utilisant une variable locale dans la fonction
   - [ ] B) En utilisant une fonction fléchée
   - [ ] C) En passant `this` comme un argument supplémentaire
   - [ ] D) En renommant `this` dans la portée extérieure

8. Comment peut-on étendre les fonctionnalités d'un type intégré en JavaScript, comme Array ou String ?
   - [ ] A) En modifiant directement l'objet global
   - [ ] B) En ajoutant des méthodes au prototype du type intégré
   - [ ] C) En créant une nouvelle classe qui hérite du type
   - [ ] D) En utilisant des décorateurs

9. Quel est l'impact de la modification directe du prototype d'un objet en JavaScript ?
   - [ ] A) Elle ne change rien au comportement de l'objet
   - [ ] B) Elle peut introduire des vulnérabilités de sécurité
   - [ ] C) Elle peut changer le comportement de tous les objets qui en héritent
   - [ ] D) Elle est recommandée pour optimiser la performance

### QCM 3: Fonction constructeur, `Object.create()`, et `Function.prototype.call()`

1. Quel est le but d'une fonction constructeur en JavaScript ?
   - [ ] A) Créer des variables privées
   - [ ] B) Créer des objets avec des propriétés et méthodes spécifiques
   - [ ] C) Définir des fonctions statiques
   - [ ] D) Importer des modules

2. Quelle méthode n'est pas recommandée pour changer le prototype d'un objet déjà existant en raison de problèmes de performance ?
   - [ ] A) `Object.create()`
   - [ ] B) `Object.setPrototypeOf()`
   - [ ] C) `Object.freeze()`
   - [ ] D) `Object.assign()`

3. Comment `Object.create()` est-il utilisé en JavaScript ?
   - [ ] A) Pour créer une copie profonde d'un objet
   - [ ] B) Pour créer un nouvel objet basé sur un prototype existant
   - [ ] C) Pour assigner des propriétés à un objet existant
   - [ ] D) Pour geler un objet, le rendant immuable

4. Quel est le premier argument de `Function.prototype.call()` ?
   - [ ] A) La valeur de retour de la fonction
   - [ ] B) Le contexte `this` pour la fonction à appeler
   - [ ] C) Les arguments à passer à la fonction
   - [ ] D) Le nom de la fonction à appeler

5. Dans quel scénario utiliseriez-vous `Function.prototype.call()` ?
   - [ ] A) Lorsque vous avez besoin de passer un tableau d'arguments
   - [ ] B) Lorsque vous voulez cloner une fonction
   - [ ] C) Lorsque vous voulez appeler une fonction avec un contexte `this` spécifique
   - [ ] D) Lorsque vous voulez créer une nouvelle fonction

6. Qu'est-ce que `Object.setPrototypeOf()` fait ?
   - [ ] A) Crée un nouvel objet avec un prototype donné
   - [ ] B) Copie les propriétés d'un objet à un autre
   - [ ] C) Définit le prototype (c'est-à-dire le chaînon de l'héritage) d'un objet existant
   - [ ] D) Gèle l'objet pour empêcher toute modification future

7. Quel est l'avantage d'utiliser des fonctions fléchées dans les callbacks par rapport aux fonctions traditionnelles ?
   - [ ] A) Elles ont leur propre contexte `this`
   - [ ] B) Elles n'ont pas de contexte `this`, donc elles héritent `this` du contexte englobant
   - [ ] C) Elles sont plus rapides
   - [ ] D) Elles peuvent être utilisées comme constructeurs

8. Comment créer un objet en JavaScript sans utiliser une fonction constructeur ou une classe ?
   - [ ] A) En utilisant `Object.freeze()`
   - [ ] B) En utilisant `Object.create()`
   - [ ] C) En utilisant `Object.assign()`
   - [ ] D) En utilisant `new Object()`

9. Pourquoi pourrait-on préférer `Object.create()` à l'utilisation d'une fonction constructeur ?
   - [ ] A) Il permet de créer des objets immuables
   - [ ] B) Il offre une syntaxe plus concise pour la création d'objets
   - [ ] C) Il fournit un moyen direct de spécifier le prototype d'un nouvel objet
   - [ ] D) Il est le seul moyen de créer des objets avec des propriétés privées

10. Quelle est la différence principale entre `call()` et `apply()` en JavaScript ?
    - [ ] A) `call()` ne peut pas accepter des arguments pour la fonction appelée, tandis que `apply()` le peut
    - [ ] B) `call()` accepte une liste d'arguments séparés, tandis que `apply()` accepte un tableau d'arguments
    - [ ] C) `call()` est utilisé exclusivement pour les fonctions fléchées, tandis que `apply()` est pour les fonctions traditionnelles
    - [ ] D) `call()` peut changer le contexte `this` d'une fonction, tandis que `apply()` ne le peut pas
