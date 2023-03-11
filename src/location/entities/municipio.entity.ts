import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Departamento } from './departamento.entity';

@Schema()
export class Municipio extends Document {
  @Prop({ type: String, required: true })
  nombre: string;

  @Prop({ type: Types.ObjectId, ref: Departamento.name })
  departamento: Departamento | Types.ObjectId;
}

export const MunicipioSchema = SchemaFactory.createForClass(Municipio);
