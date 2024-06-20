import LoggerClass from './class';
import { loggerMiddleware } from './loggerMiddleware';

const Logger = new LoggerClass();

export { loggerMiddleware };
export default Logger;
