## Cours sur les Classes en JavaScript et l'Héritage

### Introduction

En JavaScript, les classes offrent une syntaxe plus claire et une manière simplifiée d'effectuer de l'orienté objet programmation. Introduites dans ES6 (ECMAScript 2015), les classes en JavaScript sont essentiellement du sucre syntaxique par-dessus le système de prototypes existant, fournissant ainsi une façon plus accessible de définir des constructeurs et de gérer l'héritage.

### Définition d'une Classe

Une classe en JavaScript peut être définie en utilisant le mot-clé `class`, suivi du nom de la classe. La méthode `constructor` au sein d'une classe initialise les objets créés avec `new`.

```javascript
class Voiture {
  constructor(marque, modele) {
    this.marque = marque;
    this.modele = modele;
  }

  afficherDetails() {
    console.log(`Marque: ${this.marque}, Modèle: ${this.modele}`);
  }
}
```

Dans cet exemple, `Voiture` est une classe avec un constructeur prenant deux paramètres. `afficherDetails` est une méthode ajoutée à tous les objets créés à partir de `Voiture`.

### Héritage entre Classes

L'héritage permet à une classe de hériter des propriétés et méthodes d'une autre classe. En JavaScript, cela est réalisé avec le mot-clé `extends`. La fonction `super` est utilisée pour appeler le constructeur de la classe parente.

```javascript
class VoitureElectrique extends Voiture {
  constructor(marque, modele, autonomieBatterie) {
    super(marque, modele); // Appel du constructeur de la classe Voiture
    this.autonomieBatterie = autonomieBatterie;
  }

  afficherAutonomie() {
    console.log(`Autonomie de la batterie: ${this.autonomieBatterie} km`);
  }
}
```

Dans cet exemple, `VoitureElectrique` hérite de `Voiture`. Elle utilise `super` pour initialiser `marque` et `modele` avec le constructeur de `Voiture`, et ajoute une nouvelle propriété, `autonomieBatterie`, ainsi qu'une nouvelle méthode, `afficherAutonomie`.

### Surcharge de Méthode

Les classes enfant peuvent surcharger les méthodes héritées de la classe parente. Cela signifie qu'une classe enfant peut redéfinir une méthode héritée pour modifier son comportement.

```javascript
class VoitureElectrique extends Voiture {
  afficherDetails() {
    super.afficherDetails(); // Appel de la méthode de la classe parente
    console.log(`Autonomie de la batterie: ${this.autonomieBatterie} km`);
  }
}
```

Ici, `VoitureElectrique` surcharge la méthode `afficherDetails` pour inclure l'affichage de l'autonomie de la batterie, tout en conservant le comportement original de la méthode grâce à `super.afficherDetails()`.

### Conclusion

Les classes en JavaScript simplifient la syntaxe pour la création d'objets et l'implémentation de l'héritage, rendant le code plus clair et plus facile à comprendre. L'héritage permet de créer des hiérarchies de classes, facilitant la réutilisation du code et l'organisation des fonctionnalités communes dans des classes parentes. Maîtriser les classes et l'héritage en JavaScript est essentiel pour développer des applications robustes et bien structurées.