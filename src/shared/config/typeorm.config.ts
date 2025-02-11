import './dotenv.config';
import { DataSource, DataSourceOptions } from 'typeorm';

const TypeormConfig = {
  type: process.env.TYPEORM_TYPE,
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USERNAME,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../../infrastructure/database/migrations/**/*{.ts,.js}'],
  logging: true,
  synchronize: process.env.TYPEORM_SYNC === 'true',
  migrationsTableName: 'typeorm_migrations',
  cli: {
    migrationsDir: 'src/infrastructure/database/migrations',
  },
  schema: 'public',
};

export default TypeormConfig;
export const dataSource = new DataSource(TypeormConfig as DataSourceOptions);