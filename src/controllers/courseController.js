// Question: Quelle est la différence entre un contrôleur et une route ?
// Réponse: Un contrôleur contient la logique métier liée à une fonctionnalité spécifique et une route mappe les requêtes HTTP vers des contrôleurs.
// Question : Pourquoi séparer la logique métier des routes ?
// Réponse :  Pour une meilleure organisation, un code plus modulaire et réutilisable.

const { ObjectId } = require('mongodb');
const db = require('../config/db');
const mongoService = require('../services/mongoService');
const redisService = require('../services/redisService');

async function createCourse(req, res) {
  // TODO: Implémenter la création d'un cours
  // Utiliser les services pour la logique réutilisable
  try {
    const course = req.body;
    const collection = db.getDb().collection('courses');
    const result = await mongoService.insertOne(collection, course);
    res.status(201).json({ message: 'Course created', data: result });
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Export des contrôleurs
module.exports = {
  // TODO: Exporter les fonctions du contrôleur
  createCourse
};