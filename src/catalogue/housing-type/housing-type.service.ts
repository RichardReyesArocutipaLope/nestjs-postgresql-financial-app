import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateHousingTypeDto } from './dto/create-housing-type.dto';
import { UpdateHousingTypeDto } from './dto/update-housing-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HousingType } from './entities/housing-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HousingTypeService {

  private readonly logger = new Logger('HousingTypeService');

  constructor(
    @InjectRepository(HousingType)
    private readonly housingTypeRepository: Repository<HousingType>
  ) { }

  async create(createHousingTypeDto: CreateHousingTypeDto) {

    try {

      const housingType = this.housingTypeRepository.create(createHousingTypeDto)
      await this.housingTypeRepository.save(housingType)
      return housingType

    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Ayuda')
    }
  }

  findAll() {
    return `This action returns all housingType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} housingType`;
  }

  update(id: number, updateHousingTypeDto: UpdateHousingTypeDto) {
    return `This action updates a #${id} housingType`;
  }

  remove(id: number) {
    return `This action removes a #${id} housingType`;
  }

  private handleExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail)
    this.logger.error(error)
    throw new InternalServerErrorException('Unexpected error, check server logs')
  }
  
  async deleteAllHousingType() {
    const query = this.housingTypeRepository.createQueryBuilder('housingType')
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleExceptions(error)
    }
  }

}
