import 'reflect-metadata';
import express, { Application } from 'express';
import expressLoader from './app';
import diContainer from '@recall-server/core/di';
import { useExpressServer, useContainer } from 'routing-controllers';
import path from 'path';

const app : Application = express();
expressLoader({ expressApp: app });

useContainer(diContainer);

const application = useExpressServer(app, {
    routePrefix: '/api/v1',
    controllers: [path.join(__dirname, './modules/**/*.controllers.{ts,js}')],
});

export default application;
