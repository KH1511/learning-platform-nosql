// Question: Pourquoi créer des services séparés ?
// Réponse: Pour encapsuler les interactions avec la base de données, améliorer la réutilisabilité et réduire le couplage entre les contrôleurs et la base de données.

const { ObjectId } = require('mongodb');


// Fonctions utilitaires pour MongoDB
async function findOneById(collection, id) {
  // TODO: Implémenter une fonction générique de recherche par ID
  try {
    if (!ObjectId.isValid(id)) {
      throw new Error("Invalid ID format");
    }
    const objectId = ObjectId.createFromHexString(id);
    const result = await collection.findOne({ _id: objectId });
    return result;
  } catch (error) {
    console.error("Error finding document by ID:", error);
    throw error;
  }
}

const insertOne = async (collection, data) => {
  try {
    const result = await collection.insertOne(data);
    // Récupérer l'objet inséré en utilisant l'ID inséré
    const insertedDocument = await collection.findOne({ _id: result.insertedId });
    return insertedDocument;
  } catch (error) {
    console.error("Error inserting document:", error);
    throw error;
  }
}
// Export des services
module.exports = {
  // TODO: Exporter les fonctions utilitaires
  findOneById,
  insertOne
};