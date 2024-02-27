import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Quote } from './schemas/quote.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class FrasesService {
  constructor(@InjectModel(Quote.name) private quoteModel: mongoose.Model<Quote>){}

  async getRandom() : Promise<Quote[]>{
   const res = await this.quoteModel.aggregate<Quote>().
   sample(1).
   exec();
  if (res != null){
      return res;
    }
   console.log(res)   
   return null;

  }
  async create(quote: Quote): Promise<Quote>{
      const createdQuote = await this.quoteModel.create(quote);
      console.log(quote);
      return createdQuote;      
    
  }

  async bulkCreate(quotes: Quote[]): Promise<Quote[]>{
    const createBulkQuote = await this.quoteModel.insertMany(quotes,{
      ordered: true
    });
    return createBulkQuote;
  }

}
