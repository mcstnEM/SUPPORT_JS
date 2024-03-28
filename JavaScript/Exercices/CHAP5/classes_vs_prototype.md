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