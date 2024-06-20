import BaseLogger from './base';

class LoggerClass extends BaseLogger {
  public usersActivityInfo = (message: string, ...args: any[]) => this.logger('./logs/activity_users.json').info(message, ...args);
  public usersActivityError = (message: string, ...args: any[]) => this.logger('./logs/activity_users.json').error(message.toUpperCase(), ...args);
  public databaseActivityInfo = (message: string, ...args: any[]) => this.logger('./logs/activity_database.json').info(message, ...args);
  public databaseActivityError = (message: string, ...args: any[]) => this.logger('./logs/activity_database.json').error(message.toUpperCase(), ...args);
  public apiLog = (message: string, ...args: any[]) => this.logger('./logs/activity_api.json').info(message, ...args);
  public log = (message: string, ...args: any[]) => this.logger('./logs/app.log').info(message, ...args);
  public error = (message: string, processExit = false, ...args: any[]) => {
    const logger = this.logger('./logs/app_errors.json');
    logger.error(message.toUpperCase(), ...args);
    if (processExit) {
      setTimeout(() => {
        process.exit(1);
      }, 1000);
    }
  };
}

export default LoggerClass;
