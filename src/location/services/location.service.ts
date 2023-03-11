import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createDepartamentoDto, createMunicipioDto } from '../dto/location.dto';
import { Municipio } from '../entities/municipio.entity';
import { Departamento } from '../entities/departamento.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Municipio.name)
    private readonly municipioModel: Model<Municipio>,
    @InjectModel(Departamento.name)
    private readonly departamentoModel: Model<Departamento>,
  ) {}

  async getMunicipios() {
    return this.municipioModel.find().populate('departamento').exec();
  }

  async getMunicipiosByDepartamento(id: string) {
    return this.municipioModel.find({ departamento: id }).exec();
  }

  async createMunicipio(municipio: createMunicipioDto) {
    return await this.municipioModel.create(municipio);
  }

  async getDepartamentos() {
    return this.departamentoModel.find().exec();
  }
  async createDepartamento(departamento: createDepartamentoDto) {
    const res = await this.departamentoModel.create(departamento);
    return { res };
  }
}
