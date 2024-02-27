import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FrasesController } from './frases/frases.controller';
import { FrasesModule } from './frases/frases.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FrasesService } from './frases/frases.service';

@Module({
  imports: [FrasesModule,ConfigModule.forRoot({
    envFilePath: ".env",
    isGlobal: true
  }), MongooseModule.forRoot(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
