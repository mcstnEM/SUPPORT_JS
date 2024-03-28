### Partie 1: Correction avec les Classes

#### Définir la classe `Voiture`

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

#### Créer une instance de `Voiture`

```javascript
const maVoiture = new Voiture("Toyota", "Corolla");
maVoiture.afficherDetails(); // Marque: Toyota, Modèle: Corolla
```

#### Définir la sous-classe `VoitureElectrique`

```javascript
class VoitureElectrique extends Voiture {
  constructor(marque, modele, autonomieBatterie) {
    super(marque, modele);
    this.autonomieBatterie = autonomieBatterie;
  }

  afficherAutonomie() {
    console.log(`Autonomie de la batterie: ${this.autonomieBatterie} km`);
  }
}
```

#### Créer une instance de `VoitureElectrique`

```javascript
const maVoitureElectrique = new VoitureElectrique("Tesla", "Model 3", 500);
maVoitureElectrique.afficherDetails(); // Marque: Tesla, Modèle: Model 3
maVoitureElectrique.afficherAutonomie(); // Autonomie de la batterie: 500 km
```

### Partie 2: Correction avec les Prototypes

#### Définir une fonction constructeur `Voiture`

```javascript
function Voiture(marque, modele) {
  this.marque = marque;
  this.modele = modele;
}

Voiture.prototype.afficherDetails = function() {
  console.log(`Marque: ${this.marque}, Modèle: ${this.modele}`);
};
```

#### Créer une instance de `Voiture`

```javascript
const maVoiturePrototype = new Voiture("Peugeot", "208");
maVoiturePrototype.afficherDetails(); // Marque: Peugeot, Modèle: 208
```

#### Définir une fonction constructeur `VoitureElectrique`

```javascript
function VoitureElectrique(marque, modele, autonomieBatterie) {
  Voiture.call(this, marque, modele); // Héritage des propriétés de Voiture
  this.autonomieBatterie = autonomieBatterie;
}

// Établissement de l'héritage des méthodes
VoitureElectrique.prototype = Object.create(Voiture.prototype);
VoitureElectrique.prototype.constructor = VoitureElectrique;

// Ajout de la méthode spécifique à VoitureElectrique
VoitureElectrique.prototype.afficherAutonomie = function() {
  console.log(`Autonomie de la batterie: ${this.autonomieBatterie} km`);
};
```

#### Créer une instance de `VoitureElectrique`

```javascript
const maVoitureElectriquePrototype = new VoitureElectrique("Nissan", "Leaf", 270);
maVoitureElectriquePrototype.afficherDetails(); // Marque: Nissan, Modèle: Leaf
maVoitureElectriquePrototype.afficherAutonomie(); // Autonomie de la batterie: 270 km
```