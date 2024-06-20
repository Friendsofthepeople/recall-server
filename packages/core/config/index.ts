import config from './node.config';

const {
  app, api, db, uuid, google, email, env, port, host, logs, firebase, cache
} = config;


const postgresConfig = db.postgres;
const redisConfig = cache.redis;

export {
  app as appConfig,
  api as apiConfig,
  db as dbConfig,
  uuid as uuidConfig,
  google as googleConfig,
  email as emailConfig,
  env as environment,
  port as portConfig,
  host as hostConfig,
  logs as logsConfig,
  firebase as firebaseConfig,
  postgresConfig,
  redisConfig,
  cache as cacheConfig
};

export default config;
