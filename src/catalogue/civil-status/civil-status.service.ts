import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateCivilStatusDto } from './dto/create-civil-status.dto';
import { UpdateCivilStatusDto } from './dto/update-civil-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CivilStatus } from './entities/civil-status.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/users/entities/user.entity';
import * as moment from 'moment';

@Injectable()
export class CivilStatusService {

  private readonly logger = new Logger('CivilStatusService');

  constructor(
    @InjectRepository(CivilStatus)
    private readonly civiStatusRepository: Repository<CivilStatus>
  ) { }

  async create(createCivilStatusDto: CreateCivilStatusDto, user: User) {
    const { full_name, fk_employee } = user;
    if (!(typeof fk_employee == 'object')) throw new NotFoundException(`no existe employee`)
    const audit = {
      user_create: [user.id, full_name, `${fk_employee.dni}`, `${fk_employee.first_name} ${fk_employee.last_name}`],
      created_at: moment().format('YYYY-MM-DD HH:mm:ss')
    }

    try {
      const civilStatus = this.civiStatusRepository.create({
        ...createCivilStatusDto,
        ...audit
      })
      await this.civiStatusRepository.save(civilStatus)
      return civilStatus
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('AIUDA')

    }
  }

  findAll() {
    return this.civiStatusRepository.find({
      where: { is_active: true }
    })
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
