import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpedienteModule } from './expediente/expediente.module';
import { DatabaseModule } from './database/database.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [ExpedienteModule, DatabaseModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
