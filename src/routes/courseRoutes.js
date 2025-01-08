// Question: Pourquoi séparer les routes dans différents fichiers ?
// Réponse : Pour maintenir un code clair et structuré, en isolant les routes par domaine fonctionnel. Cela facilite l'évolution de l'application et l'ajout de nouvelles fonctionnalités.
// Question : Comment organiser les routes de manière cohérente ?
// Réponse: En suivant une structure RESTful avec des conventions claires pour les noms des routes et en regroupant les routes similaires dans des fichiers spécifiques

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Routes pour les cours
//Route de creation
router.post('/', courseController.createCourse);

// router.get('/:id', courseController.getCourse);
// router.get('/stats', courseController.getCourseStats);

module.exports = router;