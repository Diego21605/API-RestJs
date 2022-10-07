import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from '../config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'pg';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, dbName, password, port } = configService.postgres;
        return {
          type: 'postgres',
          host,
          port,
          username: user,
          password,
          database: dbName,
          ssl: {
            rejectUnauthorized: false,
          },
          autoLoadEntities: true,
        };
      },
      inject: [config.KEY],
    }),
  ],
  providers: [
    {
      provide: 'PG',
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, dbName, password, port } = configService.postgres;
        const client = new Client({
          user,
          host,
          database: dbName,
          password,
          port,
          ssl: {
            rejectUnauthorized: false,
          },
        });
        client.connect();
        return client;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['PG', TypeOrmModule],
})
export class DatabaseModule {}
