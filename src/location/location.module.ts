import { Module } from '@nestjs/common';
import { LocationService } from './services/location.service';
import { LocationController } from './controllers/location.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Municipio, MunicipioSchema } from './entities/municipio.entity';

import {
  Departamento,
  DepartamentoSchema,
} from './entities/departamento.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Municipio.name, schema: MunicipioSchema },
      { name: Departamento.name, schema: DepartamentoSchema },
    ]),
  ],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
