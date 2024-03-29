
function getDataFromAPI() {
  return new Promise((resolve, reject) => {
    // Simuler un délai de chargement de 2 secondes
    setTimeout(() => {
      // Simuler une réponse de l'API (peut être remplacé par une véritable requête API)
      const data = {
        username: 'Utilisateur123',
        email: 'utilisateur123@email.com',
      };

      // Simuler une erreur aléatoire pour tester le rejet de la promesse
      const randomError = Math.random() < 0.2; // 20% de chances d'erreur
      if (randomError) {
        reject(new Error('Erreur lors de la récupération des données de l\'API'));
      } else {
        resolve(data);
      }
    }, 2000); // Délai de 2 secondes
  });
}

// Étape 2: Créez une fonction fetchData qui utilise getDataFromAPI.
// Utilisez then et catch pour gérer le succès et l'erreur.
function fetchData() {
  console.log('Début du chargement des données...');

  // Utilisez getDataFromAPI() avec then pour gérer le succès
  // Utilisez catch pour gérer l'erreur
  getDataFromAPI()
    .then((data) => {
      console.log('Données récupérées avec succès:', data);
      // Bonus: Appel à displayData pour afficher les données dans votre application
      displayData(data);
    })
    .catch((error) => {
      console.error('Erreur lors du chargement des données:', error.message);
      // Bonus supplémentaire: Gestion d'erreur spécifique
      if (error.message.includes('réseau')) {
        console.error('Problème de réseau');
      } else {
        console.error('Erreur côté serveur');
      }
    })
    .finally(() => {
      console.log('Fin du chargement des données.');
    });
}

// Étape 3: Appelez la fonction fetchData pour tester votre implémentation.
// Vérifiez la console pour voir les messages de début, de succès ou d'erreur, et de fin.
fetchData();

//Ajoutez une fonction displayData(data) qui affiche les données dans votre application.
// Modifiez la fonction then de fetchData pour appeler displayData avec les données récupérées.
function displayData(data) {
  console.log('Affichage des données dans l\'application:', data);
}
