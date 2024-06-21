import dotenv from 'dotenv';

dotenv.config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  host: process.env.HOST || 'localhost',
  app: {
    name: process.env.APP_NAME || 'example',
    secret: process.env.APP_SECRET || 'secret'
  },
  api: {
    version: process.env.API_PREFIX || '/api/v1'
  },
  db: {
    postgres: {
      client: 'pg',
      host: process.env.DATABASE_HOST || 'localhost',
      database: process.env.DATABASE_NAME || 'psotgres',
      user: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASSWORD || '',
      port: parseInt(<string>process.env.DATABASE_PORT) || 5432,
      url: process.env.DATABASE_URL || ''

    },

  },
  uuid: {
    VERSION: <string>process.env.UUID_VERSION || 'v4',
    NAMESPACE: <string>process.env.UUID_NAMESPACE || 'f4c5d568-f48c-4382-9ce2-df03351ce082'
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secret',
    publicKey : process.env.JWT_PUBLIC_KEY || '',
    privateKey : process.env.JWT_PRIVATE_KEY || '',
    expiresIn: process.env.JWT_EXPIRES_IN || '1d'
  },
  email: {
    host: process.env.EMAIL_HOST || 'smtp.mailtrap.com',
    port: parseInt(<string>process.env.EMAIL_PORT) || 465,
    secure: process.env.EMAIL_SECURE || true,
    auth: {
      user: process.env.EMAIL_USERNAME || '',
      pass: process.env.EMAIL_PASSWORD || ''
    }
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    region: process.env.AWS_REGION || 'us-east-1',
    bucket: process.env.AWS_BUCKET || '',
    s3: {
      endpoint: process.env.AWS_S3_ENDPOINT || '',
      apiVersion: process.env.AWS_S3_API_VERSION || '2006-03-01'
    }
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    redirectUri: process.env.GOOGLE_REDIRECT_URI || '',
    scope: process.env.GOOGLE_SCOPE || 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'
  },
  logs: {
    level: process.env.LOG_LEVEL || 'debug',
    file: process.env.LOG_FILE || './logs/app.log'
  },
  firebase : {
    adminConnectionUrl: process.env.FIREBASE_ADMIN_CONNECTION_URL || '',
    adminDatabaseUrl: process.env.FIREBASE_ADMIN_DATABASE_URL || '',
    adminStorageBucket: process.env.FIREBASE_ADMIN_STORAGE_URL || ''
  },
  cache: {
    driver: process.env.CACHE_DRIVER || 'redis',
    redis: {
      host: process.env.REDIS_HOST || '127.0.0.1',
      port: parseInt(<string>process.env.REDIS_PORT) || 6379,
      password: process.env.REDIS_PASSWORD || '',
      username: process.env.REDIS_USERNAME || '',
      url: process.env.REDIS_URL || 'redsi://localhost:6379'
    },
  }
};
export default config;
