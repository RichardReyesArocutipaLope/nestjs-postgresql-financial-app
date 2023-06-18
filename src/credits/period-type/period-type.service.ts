import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreatePeriodTypeDto } from './dto/create-period-type.dto';
import { UpdatePeriodTypeDto } from './dto/update-period-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PeriodType } from './entities/period-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PeriodTypeService {

  private readonly logger = new Logger('PeriodTypeService');

  constructor(
    @InjectRepository(PeriodType)
    private readonly periodTypeRepository: Repository<PeriodType>
  ) { }

  async create(createPeriodTypeDto: CreatePeriodTypeDto) {
    try {
      const periodType = this.periodTypeRepository.create(createPeriodTypeDto)
      await this.periodTypeRepository.save(periodType)
      return periodType;

    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('ayuda')
    }
  }

  findAll() {
    return `This action returns all periodType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} periodType`;
  }

  update(id: number, updatePeriodTypeDto: UpdatePeriodTypeDto) {
    return `This action updates a #${id} periodType`;
  }

  remove(id: number) {
    return `This action removes a #${id} periodType`;
  }

  private handleExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail)
    this.logger.error(error)
    throw new InternalServerErrorException('Unexpected error, check server logs')
  }
  
  async deleteAllPeriodType() {
    const query = this.periodTypeRepository.createQueryBuilder('periodType')
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleExceptions(error)
    }
  }

}
