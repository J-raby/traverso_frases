import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FrasesService } from './frases.service';
import { FrasesController } from './frases.controller';
import { QuoteSchema, Quote } from './schemas/quote.schema';
import { Model } from 'mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';



@Module({
  imports: [MongooseModule.forFeature([{
    name: "Quote",
    schema: QuoteSchema
  }])],
  controllers: [FrasesController],
  providers: [FrasesService],
})
export class FrasesModule {}
