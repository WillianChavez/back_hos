import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Sexo } from './sexo.entity';

@Schema()
export class Expediente extends Document {
  @Prop({ type: Number, required: true, unique: true })
  numExpediente: number;

  @Prop({ type: String, required: true })
  primerNombre: string;

  @Prop({ type: String, required: true })
  segundoNombre: string;

  @Prop({ type: String })
  tercerNombre: string;

  @Prop({ type: String, required: true })
  primerApellido: string;

  @Prop({ type: String, required: true })
  segundoApellido: string;

  @Prop({ type: String })
  apellidoDeCasada: string;

  @Prop({ type: String })
  direccion: string;

  @Prop({ type: String })
  telefono: string;

  @Prop({ type: Types.ObjectId, ref: Sexo.name })
  sexo: Sexo | Types.ObjectId;
}
export const ExpedienteSchema = SchemaFactory.createForClass(Expediente);
