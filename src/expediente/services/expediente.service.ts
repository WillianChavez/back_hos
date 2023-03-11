import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExpedienteDto } from '../dto/create-expediente.dto';
import { UpdateExpedienteDto } from '../dto/update-expediente.dto';
import { Expediente } from '../entities/expediente.entity';

@Injectable()
export class ExpedienteService {
  constructor(
    @InjectModel(Expediente.name)
    private readonly expedienteModel: Model<Expediente>,
  ) {}
  async create(createExpedienteDto: CreateExpedienteDto) {
    if (await this.isNumExist(createExpedienteDto.numExpediente)) {
      throw new HttpException(
        'Numero de expediente ya existe',
        HttpStatus.BAD_REQUEST,
      );
    }
    const result = await this.expedienteModel.create(createExpedienteDto);
    return { result };
  }

  async isNumExist(numExpediente: number) {
    const expediente = await this.expedienteModel.findOne({ numExpediente });
    if (expediente != null) return true;
    else return false;
  }

  async isExist(id: string) {
    const exp = await this.expedienteModel.findById(id);
    if (!exp) return false;
    else return true;
  }

  async findAll() {
    const expedientes = await this.expedienteModel
      .find()
      .populate('sexo')
      .exec();
    return expedientes;
  }

  async findOneByNumExp(numExpediente: number) {
    const expediente = await this.expedienteModel.findOne({ numExpediente });
    if (!expediente) {
      throw new HttpException(
        'Numero de expediente no existe en ningun registro',
        HttpStatus.NOT_FOUND,
      );
    }
    return expediente;
  }

  async findOne(id: string) {
    if (!this.isExist(id)) {
      throw new HttpException('Expediente no econtrado', HttpStatus.NOT_FOUND);
    }
    return await this.expedienteModel.findById(id);
  }

  async update(id: string, updateExpedienteDto: UpdateExpedienteDto) {
    return await this.expedienteModel.updateOne(
      { _id: id },
      updateExpedienteDto,
    );
  }

  async remove(id: string) {
    return await this.expedienteModel.deleteOne({ _id: id });
  }
}
