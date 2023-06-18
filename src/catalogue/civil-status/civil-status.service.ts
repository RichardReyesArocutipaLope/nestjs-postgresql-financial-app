import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateCivilStatusDto } from './dto/create-civil-status.dto';
import { UpdateCivilStatusDto } from './dto/update-civil-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CivilStatus } from './entities/civil-status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CivilStatusService {

  private readonly logger = new Logger('CivilStatusService');

  constructor(
    @InjectRepository(CivilStatus)
    private readonly civiStatusRepository: Repository<CivilStatus>
  ) { }

  async create(createCivilStatusDto: CreateCivilStatusDto) {
    try {
      const civilStatus=this.civiStatusRepository.create(createCivilStatusDto)
      await this.civiStatusRepository.save(civilStatus)
      return civilStatus
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('AIUDA')
      
    }
  }

  findAll() {
    return `This action returns all civilStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} civilStatus`;
  }

  update(id: number, updateCivilStatusDto: UpdateCivilStatusDto) {
    return `This action updates a #${id} civilStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} civilStatus`;
  }

  private handleExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail)
    this.logger.error(error)
    throw new InternalServerErrorException('Unexpected error, check server logs')
  }
  
  async deleteAllCivilStatus() {
    const query = this.civiStatusRepository.createQueryBuilder('civilstatus')
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleExceptions(error)
    }
  }
}
