// Question : Pourquoi créer un module séparé pour les connexions aux bases de données ?
// Réponse : Pour centraliser la logique de connexion, réduire la duplication de code, et faciliter la maintenance ainsi que le débogage. 
// Question : Comment gérer proprement la fermeture des connexions ?
// Réponse :  Il est crucial de capturer les signaux système comme SIGTERM et SIGINT pour fermer proprement les connexions MongoDB et Redis en appelant leurs méthodes de fermeture (close). Cela empêche les fuites de ressources et garantit une libération correcte des connexions.

const { MongoClient } = require('mongodb');
const redis = require('redis');
require('dotenv').config();

let mongoClient, redisClient, db;

const mongoUri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;
const redisUri = process.env.REDIS_URI;

async function connectMongo() {
  try {
    mongoClient = new MongoClient(mongoUri); // Suppression des options obsolètes
    await mongoClient.connect();
    console.log("Connected to MongoDB");
    db = mongoClient.db(dbName);
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    setTimeout(connectMongo, 5000);
  }
}

async function connectRedis() {
  try {
    redisClient = redis.createClient({ url: redisUri });
    redisClient.on("error", (err) => console.error("Redis Client Error", err));
    await redisClient.connect();
    console.log("Connected to Redis");
    return redisClient;
  } catch (error) {
    console.error("Error connecting to Redis:", error);
    setTimeout(connectRedis, 5000);
  }
}

async function closeConnections() {
  if (mongoClient) await mongoClient.close();
  if (redisClient) await redisClient.quit();
  console.log('Connections closed');
}

module.exports = {
  connectMongo,
  connectRedis,
  getMongoClient: () => mongoClient,
  getDb: () => db,
  getRedisClient: () => redisClient,
  closeConnections,
};
