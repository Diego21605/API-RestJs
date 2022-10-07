import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import config from './config'

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            load: [config],
            isGlobal: true,
        }),
        DatabaseModule,
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {}