import { DataSource, DataSourceOptions } from 'typeorm';

const TypeormConfig = {
  type: process.env.TYPEORM_TYPE,
  host: process.env.PMB_POSTGRES_HOST,
  username: process.env.PMB_POSTGRES_USERNAME,
  port: process.env.PMB_POSTGRES_PORT,
  database: process.env.PMB_POSTGRES_DATABASE,
  password: process.env.PMB_POSTGRES_PASSWORD,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../infrastructure/database/migrations/**/*{.ts,.js}'],
  logging: false,
  synchronize: process.env.TYPEORM_SYNC === 'true',
  migrationsTableName: 'typeorm_migrations',
  cli: {
    migrationsDir: 'src/infrastructure/database/migrations',
  },
  schema: 'kata',
};

export default TypeormConfig;
export const dataSource = new DataSource(TypeormConfig as DataSourceOptions);