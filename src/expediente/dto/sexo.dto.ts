import { IsString } from 'class-validator';

export class SexoDto {
  @IsString()
  genero: string;
}
