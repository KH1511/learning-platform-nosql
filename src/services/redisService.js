// Question : Comment gérer efficacement le cache avec Redis ?
// Réponse : En utilisant des TTL (Time-To-Live) appropriés, en invalidant les clés lorsque les données changent, et en adoptant une stratégie de clé cohérente pour éviter les collisions.
// Question: Quelles sont les bonnes pratiques pour les clés Redis ?
// Réponse : Utiliser des noms de clé descriptifs et hiérarchiques, éviter les clés trop longues, et limiter leur nombre pour éviter de saturer la mémoire.

const redis = require("redis");
const client = redis.createClient({ url: process.env.REDIS_URI });

client.on("error", (err) => console.error("Redis Client Error", err));

async function connectRedis() {
  if (!client.isOpen) {
    await client.connect();
  }
};

// Fonctions utilitaires pour Redis
async function cacheData(key, data, ttl) {
    // TODO: Implémenter une fonction générique de cache
    try {
      await connectRedis();
      await client.set(key, JSON.stringify(data), { EX: ttl });
      console.log(`Data cached with key: ${key}`);
    } catch (error) {
      console.error("Error caching data:", error);
      throw error;
    }
  }
  
  async function getData(key) {
    try {
      await connectRedis();
      const data = await client.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error getting cached data:", error);
      throw error;
    }
  }
  
  async function deleteData(key) {
    try {
      await connectRedis();
      await client.del(key);
      console.log(`Data deleted with key: ${key}`);
    } catch (error) {
      console.error("Error deleting cached data:", error);
      throw error;
    }
  }
  
  
  module.exports = {
    // TODO: Exporter les fonctions utilitaires
    cacheData,
    getData,
    deleteData,
    connectRedis,
  };