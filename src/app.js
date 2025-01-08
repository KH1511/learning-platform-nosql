// Question: Comment organiser le point d'entrée de l'application ?
//Reponse : En structurant le fichier de manière à inclure :
// Les configurations globales (par exemple, les variables d'environnement).
//   L'initialisation des bases de données.
//   La configuration des middlewares.
//   Le montage des routes.
//   La gestion propre des erreurs et signaux système.

// Question: Quelle est la meilleure façon de gérer le démarrage de l'application ?
// Reponse : En encapsulant la logique de démarrage dans une fonction asynchrone, en utilisant des blocs try/catch pour gérer les erreurs, et en garantissant une fermeture propre des connexions en cas de signal d'arrêt (SIGTERM, SIGINT).

const express = require('express');
const config = require('./config/env');
const db = require('./config/db');

const courseRoutes = require('./routes/courseRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

async function startServer() {
  try {
    // TODO: Initialiser les connexions aux bases de données
    // TODO: Configurer les middlewares Express
    // TODO: Monter les routes
    // TODO: Démarrer le serveur
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Gestion propre de l'arrêt
process.on('SIGTERM', async () => {
  // TODO: Implémenter la fermeture propre des connexions
});

startServer();