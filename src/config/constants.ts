import { config } from 'dotenv';

config();

export const nestMailer = {
  transport: {
    secureConnection: false,
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  },
};

export const jwtConstants = {
  secret: process.env.JWT_SECRET,
};

export const envHost = {
  development: process.env.DEV_HOST,
  stage: process.env.STAGE_HOST,
  production: process.env.PROD_HOST,
};
