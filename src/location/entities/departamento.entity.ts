import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Departamento extends Document {
  @Prop({ type: String, required: true })
  nombre: string;
}
export const DepartamentoSchema = SchemaFactory.createForClass(Departamento);
