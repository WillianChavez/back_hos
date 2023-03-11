import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class createMunicipioDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  @IsMongoId()
  readonly departamento: string;
}
export class createDepartamentoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}
