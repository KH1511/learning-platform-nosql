// Question : Pourquoi créer un module séparé pour les connexions aux bases de données ?
// Réponse : Pour centraliser la logique de connexion, réduire la duplication de code, et faciliter la maintenance ainsi que le débogage. 
// Question : Comment gérer proprement la fermeture des connexions ?
// Réponse :  Il est crucial de capturer les signaux système comme SIGTERM et SIGINT pour fermer proprement les connexions MongoDB et Redis en appelant leurs méthodes de fermeture (close). Cela empêche les fuites de ressources et garantit une libération correcte des connexions.

const { MongoClient } = require('mongodb');
const redis = require('redis');
const config = require('./env');

let mongoClient, redisClient, db;

async function connectMongo() {
  // TODO: Implémenter la connexion MongoDB
  // Gérer les erreurs et les retries
  try {
    mongoClient = new MongoClient(config.mongodb.uri); // Supprimer useNewUrlParser et useUnifiedTopology
    await mongoClient.connect();
    db = mongoClient.db(config.mongodb.dbName);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

async function connectRedis() {
  // TODO: Implémenter la connexion Redis
  // Gérer les erreurs et les retries
  try {
    redisClient = redis.createClient({ url: config.redis.uri });
    redisClient.on('error', (err) => console.error('Redis error:', err));
    await redisClient.connect();
    console.log('Connected to Redis');
  } catch (error) {
    console.error('Redis connection error:', error);
    process.exit(1);
  }
 
}
async function closeConnections() {
  if (mongoClient) await mongoClient.close();
  if (redisClient) await redisClient.quit();
  console.log('Connections closed');
}

// Export des fonctions et clients
module.exports = {
  // TODO: Exporter les clients et fonctions utiles
  connectMongo,
  connectRedis,
  getDb: () => db,
  getRedisClient: () => redisClient,
  closeConnections,
  

};