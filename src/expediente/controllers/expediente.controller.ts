import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExpedienteService } from '../services/expediente.service';
import { CreateExpedienteDto, paramsFind } from '../dto/create-expediente.dto';
import { UpdateExpedienteDto } from '../dto/update-expediente.dto';

@Controller('expediente')
export class ExpedienteController {
  constructor(private readonly expedienteService: ExpedienteService) {}

  @Post()
  create(@Body() createExpedienteDto: CreateExpedienteDto) {
    return this.expedienteService.create(createExpedienteDto);
  }

  @Get()
  findAll() {
    return this.expedienteService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: paramsFind) {
    return this.expedienteService.findOne(params.id);
  }

  @Get('/num/:num')
  findByExp(@Param('num') num: number) {
    return this.expedienteService.findOneByNumExp(num);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExpedienteDto: UpdateExpedienteDto,
  ) {
    return this.expedienteService.update(id, updateExpedienteDto);
  }

  @Delete(':id')
  remove(@Param() params: paramsFind) {
    return this.expedienteService.remove(params.id);
  }
}
