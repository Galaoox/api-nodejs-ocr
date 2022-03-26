import { config } from 'dotenv';

config();

export const DB_HOST = process.env.DB_HOST;
export const PORT = process.env.PORT || 3000;