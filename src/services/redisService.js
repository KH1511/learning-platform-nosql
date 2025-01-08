// Question : Comment gérer efficacement le cache avec Redis ?
// Réponse : En utilisant des TTL (Time-To-Live) appropriés, en invalidant les clés lorsque les données changent, et en adoptant une stratégie de clé cohérente pour éviter les collisions.
// Question: Quelles sont les bonnes pratiques pour les clés Redis ?
// Réponse : Utiliser des noms de clé descriptifs et hiérarchiques, éviter les clés trop longues, et limiter leur nombre pour éviter de saturer la mémoire.

// Fonctions utilitaires pour Redis
async function cacheData(key, data, ttl) {
    // TODO: Implémenter une fonction générique de cache
    try {
      await client.set(key, JSON.stringify(data), {
        EX: ttl
      });
      console.log(`Data cached with key: ${key}`);
    } catch (error) {
      console.error('Error caching data:', error);
    }
  }
  
  module.exports = {
    // TODO: Exporter les fonctions utilitaires
    cacheData
  };