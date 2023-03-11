import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createDepartamentoDto, createMunicipioDto } from '../dto/location.dto';
import { LocationService } from '../services/location.service';

@Controller()
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get('municipios')
  getMunicipios() {
    return this.locationService.getMunicipios();
  }

  @Get('departamentos')
  getDepartamentos() {
    return this.locationService.getDepartamentos();
  }

  @Get('departamentos/:id/municipios')
  getMunicipiosPorDepartamento(@Param('id') id: string) {
    return this.locationService.getMunicipiosByDepartamento(id);
  }

  @Post('departamentos')
  create(@Body() dep: createDepartamentoDto) {
    return this.locationService.createDepartamento(dep);
  }

  @Post('municipios')
  createMunicipio(@Body() municipio: createMunicipioDto) {
    return this.locationService.createMunicipio(municipio);
  }
}
