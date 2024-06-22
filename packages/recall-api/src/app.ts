import express from 'express';
import chalk from 'chalk';
import expressLoader from './express';
import Logger from "@recall-server/common/logger";

export default async ({ expressApp }: { expressApp : express.Application }) => {
  process.on('unhandledRejection', (reason: Error) => {
    Logger.error('---Unhandled Rejection--->', false, reason);
  });

  process.on('uncaughtException', (error: Error) => {
    Logger.error('---Uncaught Exception--->', true, error);
  });

  process.on('uncaughtExceptionMonitor', (error: Error) => {
    Logger.error('---Uncaught Exception Monitor--->', false, error);
  });
  expressLoader({ app: expressApp });
  console.log(chalk.yellowBright('Express loaded'));
};
