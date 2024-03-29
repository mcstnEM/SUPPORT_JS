// Travaux Pratiques Avancés sur les Promesses en JavaScript

// Étape 1: Simulation de tâche asynchrone
function simulateTask(taskName) {
    const duration = Math.floor(Math.random() * 5000) + 1000; // Durée entre 1 et 5 secondes
  
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${taskName} terminée après ${duration / 1000} secondes`);
        resolve(taskName);
      }, duration);
    });
}
  
  // Étape 2: Exécution de plusieurs tâches en parallèle
async function runTasks() {
  console.log('Début de l\'exécution des tâches...');

  try {
    const results = await Promise.all([
      simulateTask('Tâche 1'),
      simulateTask('Tâche 2'),
      simulateTask('Tâche 3'),
    ]);

    console.log('Toutes les tâches sont terminées avec succès:', results);
    // Bonus: Appel à displayResults pour afficher les résultats dans votre application
    displayResults(results);
  } catch (error) {
    console.error('Une erreur s\'est produite lors de l\'exécution des tâches:', error.message);
    // Bonus: Gestion d'erreur spécifique
    handleError(error);
  } finally {
    console.log('Fin de l\'exécution des tâches.');
  }
}
  
// Bonus: Affichage des résultats dans l'application
function displayResults(results) {
  console.log('Affichage des résultats dans l\'application:', results);
}

// Bonus supplémentaire: Gestion d'erreur spécifique
function handleError(error) {
  if (error.message.includes('réseau')) {
    console.error('Problème de réseau');
  } else {
    console.error('Erreur côté serveur');
  }
}
  
// Bonus ultime: Utilisation de async/await pour une séquence de tâches dépendantes
async function runSequentialTasks() {
  console.log('Début de la séquence de tâches...');

  try {
    const resultTask1 = await simulateTask('Tâche 1');
    const resultTask2 = await simulateTask('Tâche 2, dépendante de Tâche 1');
    const resultTask3 = await simulateTask('Tâche 3, dépendante de Tâche 2');

    console.log('Séquence de tâches terminée avec succès:', resultTask1, resultTask2, resultTask3);
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la séquence de tâches:', error.message);
  } finally {
    console.log('Fin de la séquence de tâches.');
  }
}
  
// Étape 3: Testez votre implémentation
runTasks();

// Bonus ultime: Testez la séquence de tâches dépendantes
runSequentialTasks();
