import { DataSource } from "typeorm";

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
          const dataSource = new DataSource({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'postgres',
            entities: [__dirname + '/../**/*.entity.js'],
            synchronize: false,
          });
    
          return dataSource.initialize();
        },
      },
]