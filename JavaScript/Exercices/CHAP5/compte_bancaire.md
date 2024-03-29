Dans cet exercice, nous allons utiliser les prototypes pour créer un système simple de gestion de comptes bancaires. Nous définirons une fonction constructeur `CompteBancaire` pour créer des comptes avec un solde initial. Ensuite, nous utiliserons le prototype de `CompteBancaire` pour ajouter des méthodes permettant de déposer, retirer de l'argent et afficher le solde du compte.

### Objectifs de l'exercice

1. Créer une fonction constructeur `CompteBancaire` qui initialise un compte avec un `titulaire` (le nom du propriétaire du compte) et un `solde` initial.
2. Ajouter des méthodes au prototype de `CompteBancaire` pour :
   - Déposer de l'argent (`deposer`)
   - Retirer de l'argent (`retirer`)
   - Afficher le solde du compte (`afficherSolde`)

### Étape 1: Définition de la fonction constructeur `CompteBancaire`

```javascript
function CompteBancaire(titulaire, solde) {
  this.titulaire = titulaire;
  this.solde = solde;
}
```

### Étape 2: Ajout de méthodes au prototype de `CompteBancaire`

```javascript
CompteBancaire.prototype.deposer = function(montant) {
  this.solde += montant;
  console.log(`${montant}€ ont été déposés`);
};

CompteBancaire.prototype.retirer = function(montant) {
  if (this.solde >= montant) {
    this.solde -= montant;
    console.log(`${montant}€ ont été retirés`);
  } else {
    console.log("Solde insuffisant pour effectuer cette opération");
  }
};

CompteBancaire.prototype.afficherSolde = function() {
  console.log(`Le solde du compte est de ${this.solde}€`);
};
```

### Étape 3: Utilisation de `CompteBancaire` pour créer et gérer un compte

```javascript
let compteDePaul = new CompteBancaire("Paul", 1000); // Crée un compte avec un solde initial de 1000€

compteDePaul.afficherSolde(); // Affiche le solde initial
compteDePaul.deposer(500); // Paul dépose 500€
compteDePaul.afficherSolde(); // Affiche le solde après dépôt
compteDePaul.retirer(200); // Paul retire 200€
compteDePaul.afficherSolde(); // Affiche le solde final
```

### Conclusion

Cet exercice montre comment les prototypes peuvent être utilisés pour ajouter des fonctionnalités communes à toutes les instances d'un type d'objet en JavaScript. En ajoutant des méthodes au prototype de `CompteBancaire`, nous assurons que chaque instance de compte bancaire hérite de ces méthodes, permettant ainsi une gestion efficace et centralisée du comportement des comptes bancaires.