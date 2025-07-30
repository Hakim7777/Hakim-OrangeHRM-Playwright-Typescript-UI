// orangehrm/loggerOrangehrm/LoggerOrangehrm.ts
import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';

const { combine, timestamp, printf } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `[${level.toUpperCase()}] ${timestamp} - ${message}`;
});

export const LoggerOrangehrm = createLogger({
  level: 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DDTHH:mm:ssZ'}),
    logFormat
  ),
  transports: [
    new transports.Console(),
    new transports.DailyRotateFile({
      filename: 'logs/orangehrm-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxFiles: '14d'
    })
  ]
});