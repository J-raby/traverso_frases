import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type QuoteDocument = HydratedDocument<Quote>

@Schema()
export class Quote{
    @Prop()
    text: string;

    @Prop()
    date: Date;
}

export const QuoteSchema = SchemaFactory.createForClass(Quote);