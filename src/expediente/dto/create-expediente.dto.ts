import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsMongoId,
} from 'class-validator';
import { Types } from 'mongoose';
import { Sexo } from '../entities/sexo.entity';
export class CreateExpedienteDto {
  @IsNumber()
  @IsNotEmpty()
  numExpediente: number;

  @IsString()
  @IsNotEmpty()
  primerNombre: string;

  @IsString()
  @IsNotEmpty()
  segundoNombre: string;

  @IsOptional()
  @IsString()
  tercerNombre: string;

  @IsString()
  @IsNotEmpty()
  primerApellido: string;

  @IsString()
  @IsNotEmpty()
  segundoApellido: string;

  @IsOptional()
  @IsString()
  apellidoDeCasada: string;

  @IsOptional()
  @IsString()
  direccion: string;

  @IsOptional()
  @IsString()
  telefono: string;

  @IsString()
  sexo: string;
}

export class paramsFind {
  @IsMongoId()
  @IsString()
  id: string;
}
