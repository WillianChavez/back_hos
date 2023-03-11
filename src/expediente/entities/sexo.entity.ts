import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Sexo extends Document {
  @Prop({ type: String })
  genero: string;
}
export const SexoSchema = SchemaFactory.createForClass(Sexo);
