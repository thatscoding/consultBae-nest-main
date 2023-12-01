import { Module } from '@nestjs/common';
import { EventModule } from './event/event.module';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [EventModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.local.env']
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({ uri: configService.get("MONGO_URL") }),
      inject: [ConfigService]
    }),
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
