import { Module } from '@nestjs/common';
import { ExpedienteService } from './services/expediente.service';
import { ExpedienteController } from './controllers/expediente.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Expediente, ExpedienteSchema } from './entities/expediente.entity';
import { Sexo, SexoSchema } from './entities/sexo.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Expediente.name,
        schema: ExpedienteSchema,
      },
      {
        name: Sexo.name,
        schema: SexoSchema,
      },
    ]),
  ],
  controllers: [ExpedienteController],
  providers: [ExpedienteService],
})
export class ExpedienteModule {}
