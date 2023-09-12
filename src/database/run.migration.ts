import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const runMigrations = async () => {
  try {
    console.log(process.env.DB_URL);
    const client = postgres(process.env.DB_URL, { max: 1 });
    const db = drizzle(client);

    await migrate(db, { migrationsFolder: './sqlmigrations' });
  } catch (err) {
    throw err;
  }
};

export default runMigrations;
