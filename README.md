# Projet de fin de module NoSQL

  ***********************installation et lancement du projet*************************************
-> Cloner le dépôt par les commandes suivantes:

git clone https://github.com/KH1511/learning-platform-nosql.git
cd learning-platform-nosql

-> Installation des dépendances par la commande :
npm install

-> Configuration les variables d'environnement dans le fichier .env:

MONGODB_URI=mongodb://localhost:27017
MONGODB_DB_NAME=learning_platform
REDIS_URI=redis://127.0.0.1:6379
PORT=3000


************************Structure du Projet****************************
├── src
│   ├── config
│   │   ├── db.js                ### connexion aux bases de données
│   │   ├── env.js               ### Validation des variables d'environnement
│   ├── controllers
│   │   ├── courseController.js  ### Contrôleur pour les fonctions qui ont relation avec le cours (creation...)
│   ├── routes
│   │   ├── courseRoutes.js      ### Routes pour les fonctions des cours
│   ├── services
│   │   ├── mongoService.js      ### Pour les services de MongoDB
│   │   ├── redisService.js      ### Pour les services de Redis
│   ├── app.js                   ### Point d'entrée de l'application (pour executer l'application)
├── .env                         ### Fichier de configuration des variables d'environnement
├── .gitignore                   ### Fichier pour ignorer des fichiers et des dossiers particuliers
├── [package-lock.json]          ### Fichier généré automatiquement par npm, contient les versions exactes des dépendances
├── [package.json]               ### Contient les dépendances et scripts du projet
└── [README.md]                  ### Documentation du projet

   "dotenv": "^16.4.7"  -> Pour la gestion des variables d'environnement, permettant de stocker les configurations sensibles comme les clés API ou les mots de passe dans des fichiers `.env`, afin de sécuriser l'application.
   
   "express": "^4.21.2" -> Framework web minimal et flexible pour Node.js, utilisé pour la création des API RESTful. Il facilite le routage, la gestion des requêtes HTTP et la structuration de l'application serveur.
   
   "mongodb": "^6.12.0" -> Pour la gestion des bases de données NoSQL, MongoDB permet de stocker des données sous forme de documents JSON, offrant une flexibilité et une scalabilité importantes pour des applications modernes.
   
   "redis": "^4.7.0"    -> Pour la gestion du cache, Redis est un système de gestion de données en mémoire qui permet d'améliorer les performances en stockant temporairement des données fréquemment utilisées et ainsi réduire les appels à la base de données.
   
   Node.js : Environnement de travail, une plateforme côté serveur qui permet d'exécuter du JavaScript en dehors du navigateur. Elle est idéale pour les applications à fort trafic et en temps réel, grâce à son modèle non-bloquant basé sur les événements.

   Et pour tester le fonctionnement de l'application, j'ai utilise l'outil : Postman

   ************* Les réponses aux questions posées dans les commentaires *******************
   Pourquoi créer un module séparé pour les connexions aux bases de données ?
     ->Pour centraliser la logique de connexion, réduire la duplication de code, et faciliter la maintenance ainsi que le débogage. 

   Comment gérer proprement la fermeture des connexions ?
      ->Il est crucial de capturer les signaux système comme SIGTERM et SIGINT pour fermer proprement les connexions MongoDB et Redis en appelant leurs méthodes de fermeture (close). Cela empêche les fuites de ressources et garantit une libération correcte des connexions.

   Pourquoi est-il important de valider les variables d'environnement au démarrage ?
      ->Pour éviter des comportements inattendus liés à des valeurs manquantes ou mal configurées.

   Que se passe-t-il si une variable requise est manquante ?
      ->Une erreur explicative doit être levée, et l'application doit s'arrêter pour prévenir tout comportement non défini.

   Quelle est la différence entre un contrôleur et une route ?
      ->Un contrôleur contient la logique métier liée à une fonctionnalité spécifique et une route mappe les requêtes HTTP vers des contrôleurs.

   Pourquoi séparer la logique métier des routes ?
      ->Pour une meilleure organisation, un code plus modulaire et réutilisable.

   Pourquoi séparer les routes dans différents fichiers ?
      ->Pour maintenir un code clair et structuré, en isolant les routes par domaine fonctionnel. Cela facilite l'évolution de l'application et l'ajout de nouvelles fonctionnalités.

   Comment organiser les routes de manière cohérente ?
      ->En suivant une structure RESTful avec des conventions claires pour les noms des routes et en regroupant les routes similaires dans des fichiers spécifiques.

   Pourquoi créer des services séparés ?
      ->Pour encapsuler les interactions avec la base de données, améliorer la réutilisabilité et réduire le couplage entre les contrôleurs et la base de données.

   Comment gérer efficacement le cache avec Redis ?
      ->En utilisant des TTL (Time-To-Live) appropriés, en invalidant les clés lorsque les données changent, et en adoptant une stratégie de clé cohérente pour éviter les collisions.

   Quelles sont les bonnes pratiques pour les clés Redis ?
      ->Utiliser des noms de clé descriptifs et hiérarchiques, éviter les clés trop longues, et limiter leur nombre pour éviter de saturer la mémoire.

   Comment organiser le point d'entrée de l'application ?
      ->En structurant le fichier de manière à inclure :
        Les configurations globales (par exemple, les variables d'environnement).
        L'initialisation des bases de données.
        La configuration des middlewares.
        Le montage des routes.
        La gestion propre des erreurs et signaux système.

   Quelle est la meilleure façon de gérer le démarrage de l'application ?
        ->En encapsulant la logique de démarrage dans une fonction asynchrone, en utilisant des blocs try/catch pour gérer les erreurs, et en garantissant une fermeture propre des connexions en cas de signal d'arrêt (SIGTERM, SIGINT).

   Question: Quelles sont les informations sensibles à ne jamais commiter ?
        ->Les informations sensibles comme les clés API, mots de passe de bases de données, certificats SSL, clés privées et données personnelles ne doivent jamais être commitées. 

   Pourquoi utiliser des variables d'environnement ?
        ->Les variables d'environnement permettent de garder les informations sensibles hors du code source. Elles facilitent la gestion des configurations spécifiques à chaque environnement (développement, test, production) tout en renforçant la sécurité et la flexibilité.

************************* Lancement et tests***********************************
   ->Lancement de l'application a l'aide de la commande "node ./src/app.js"
   c:\Users\pc\Desktop\Docs\Cours CCN\S3\XML et Framework\MongoDB\server1.png
   
   -> Create course : 
   c:\Users\pc\Desktop\Docs\Cours CCN\S3\XML et Framework\MongoDB\insertion d'un cours.png

   -> Get course by id :
   c:\Users\pc\Desktop\Docs\Cours CCN\S3\XML et Framework\MongoDB\get by Id.png

   -> Get Stats :
   c:\Users\pc\Desktop\Docs\Cours CCN\S3\XML et Framework\MongoDB\get Stats.png

   -> Server :
   c:\Users\pc\Desktop\Docs\Cours CCN\S3\XML et Framework\MongoDB\server.png

