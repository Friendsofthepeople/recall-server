import Redis, { RedisOptions } from 'ioredis';
import { cacheConfig  } from '@recall-server/core/config';

const {
  host, port, password, username
} = cacheConfig.redis;

const defaultRedisConfig: RedisOptions = {
  host,
  port,
  password,
  family: 4,
  db: 0,
  username,
  enableOfflineQueue: true,
  enableAutoPipelining: true
};

const redis = (defaultConfig? : RedisOptions) => {
  const config = defaultConfig || defaultRedisConfig;
  return new Redis(config);
};

export default redis;
