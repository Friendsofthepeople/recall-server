import morgan, { StreamOptions } from 'morgan';
import Logger from './class';

const logger = new Logger();

const stream: StreamOptions = {
  write: (message) => logger.apiLog(message)
};

export const loggerMiddleware = morgan('combined', { stream });
