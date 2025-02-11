import '../../../shared/config/dotenv.config';
const Client = require('pg').Client;

(async function () {
  const client = new Client({
    user: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE,
  });
  try {
    await client.connect();
  } catch (err) {
    console.error('create-schema | Error: ' + err);
  } finally {
    await client.end();
  }
})();
