import { config } from 'dotenv';

config();

export const jwtConstants = {
  secret: process.env.JWT_SECRET,
};

export const envHost = {
  development: process.env.DEV_HOST,
  stage: process.env.STAGE_HOST,
  production: process.env.PROD_HOST,
};
