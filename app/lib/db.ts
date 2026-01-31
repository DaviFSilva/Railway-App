import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.IS_BUILD === 'true'
  ? process.env.DATABASE_PUBLIC_URL
  : process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export const db = {
  query: (text: string, params: any[]) => pool.query(text, params),
};
