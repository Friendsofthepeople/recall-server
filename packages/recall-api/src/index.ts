import 'reflect-metadata';
import express, { Application } from 'express';
import expressLoader from './app';

const app : Application = express();

expressLoader({ expressApp: app });

export default app;
