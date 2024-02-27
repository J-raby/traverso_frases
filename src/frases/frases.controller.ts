import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FrasesService } from './frases.service';
import { Quote } from './schemas/quote.schema';

@Controller('frases')
export class FrasesController {
  constructor(private readonly frasesService: FrasesService) {}

  @Get()
  async getRandom(): Promise<Quote[]>{
    const res = await this.frasesService.getRandom();
    return res;
  }

  @Post()
  async create(@Body() quote: Quote): Promise<Quote> {
    const resp = await this.frasesService.create(quote)
    return resp;
  }

  @Post('bulk')
  async bulkCreate(@Body() quotes: Quote[]): Promise<Quote[]>{
    const resp = await this.frasesService.bulkCreate(quotes);
    return resp;
  }
}
