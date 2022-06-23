import * as winston from'winston';
import * as morgan from 'morgan'

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/access.log', maxFiles: 5, maxsize: 5000000, level: 'http' }),
    new winston.transports.Console({level:'debug', format: winston.format.simple()})
  ],
});

const stream = {
  write: (message) => logger.http(message),
};

const loggerMiddleware = morgan('combined', { stream })

export { logger, loggerMiddleware }