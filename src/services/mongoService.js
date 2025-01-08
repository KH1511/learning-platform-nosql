// Question: Pourquoi créer des services séparés ?
// Réponse: Pour encapsuler les interactions avec la base de données, améliorer la réutilisabilité et réduire le couplage entre les contrôleurs et la base de données.

const { ObjectId } = require('mongodb');

// Fonctions utilitaires pour MongoDB
async function findOneById(collection, id) {
  // TODO: Implémenter une fonction générique de recherche par ID
}

// Export des services
module.exports = {
  // TODO: Exporter les fonctions utilitaires
};