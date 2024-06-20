import { createLogger, transports, format } from 'winston';
import dayjs from 'dayjs';
import LocalizedFromat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import DailyRotateFile from 'winston-daily-rotate-file';
import { environment } from '@recall-server/core/config';

class BaseLogger {
  private env: string = environment;
  private options: any;
  private dayjs: typeof dayjs = dayjs;
  private MESSAGE = Symbol.for('message');
  private logLevel: string = this.env === 'development' ? 'debug' : 'info';
  private dir = './logs/app.log';
  constructor() {
    this.options = this.config();
    this.dayjs.extend(LocalizedFromat);
    this.dayjs.extend(utc);
    this.dayjs.extend(timezone);
  }

  public setLogLevel = (level: string): void => {
    this.logLevel = level;
  };

  private config = () => ({
    file: {
      level: this.logLevel,
      filename: `${this.dir}%DATE%.json`,
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      timestamp: true,
      handleExceptions: true,
      humanReadableUnhandledException: true,
      prettyPrint: true,
      json: true,
      maxSize: '20m',
      colorize: true,
      maxFiles: '14d'
    }
  });

  private jsonFormatter = (logEntry: any) => {
    const base = { timestamp: dayjs().tz('Africa/Nairobi').format('LLLL') };
    const json = Object.assign(base, logEntry);
    // eslint-disable-next-line no-param-reassign
    logEntry[this.MESSAGE] = JSON.stringify(json);
    return logEntry;
  };

  public logger = (logFileDir:string) => createLogger({
    transports: [
      new transports.Console({
        level: this.logLevel,
        format: format(this.jsonFormatter)(
          format.errors({ stack: true })
        )
      }),
      new transports.File({
        filename: logFileDir,
        format: format(this.jsonFormatter)(format.json())
      })
    ],
    exceptionHandlers: [new DailyRotateFile(this.config().file)],
    exitOnError: false // do not exit on handled exceptions
  });
}

export default BaseLogger;
