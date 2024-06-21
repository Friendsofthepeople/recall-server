import express, {
  Application, Request, Response, NextFunction
} from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import logger, { loggerMiddleware } from '@recall-server/common/logger';
import { dbClient } from "./database";

export default async ({ app }: { app: Application }) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.disable('x-powered-by');

  const whiteList = [
    //production
    // development urls
    'http://localhost',
    'localhost',
    '127.0.0.1',
    'http://localhost:3000',
    'localhost:3000',
    'http://127.0.0.1:3000',
    '127.0.0.1:3000',
    /\.ngrok\.io$/,
    // production urls
  ];

  const corsOptions: cors.CorsOptions = {
    origin: whiteList,
    credentials: true,
    optionsSuccessStatus: 200,
    methods: 'GET,HEAD,PUT,OPTIONS,PATCH,POST,DELETE',
    preflightContinue: true,
    allowedHeaders: [
      'Origin',
      'Access-Control-Allow-Origin',
      'Access-Control-Allow-Headers',
      'Accept-Version',
      'Authorization',
      'Credentials',
      'X-Requested-With',
      'Content-Type'
    ]
  };

  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions), (req:Request, res:Response) => res.sendStatus(200));
  app.options('/*', (req:Request, res:Response) => res.sendStatus(200));


  app.enable('trust proxy');
  app.set('trust proxy', 1);
  if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
  }

  const shouldCompress = (req: Request, res: Response) => (req.headers['x-no-compression'] ? false : compression.filter(req, res));
  app.use(compression({ filter: shouldCompress }));

  // morgan logger
  app.use(loggerMiddleware);


  // Default endpoint for eb health check
  app.get('/', (req:Request, res:Response) => res.status(200).send('Welcome to Recall Server'));



  /**
    * GET /test
    * @summary This is a test endpoint
    * @return {object} 200 - A successful response
    *
    */
  app.get('/test', (req: Request, res: Response) => {
    res.status(200).send({ msg: 'This is working' });
  });

  /**
     * API Routes
     * Add more versions of the api below
     */

  // app.use('/api/v1');

  // Redirect errors to specific pages
  /**
     * This is a 404 redirect error
     */
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).format({
      json: () => {
        res.send({ err: 'Not Found' });
      },
      text: () => {
        res.send('Not found');
      },
      default: () => {
        res.status(406).send('Not Acceptable');
      }
    });

    next();
  });

  //connect to DB
  try {
    await dbClient.connect();
    console.log('Connected to DB');
    logger.log('Connected to DB');
  } catch (error) {
    logger.error('Error connecting to DB',false, error);
  }
};
