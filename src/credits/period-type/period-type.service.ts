import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreatePeriodTypeDto } from './dto/create-period-type.dto';
import { UpdatePeriodTypeDto } from './dto/update-period-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PeriodType } from './entities/period-type.entity';
import { Repository } from 'typeorm';
import * as moment from 'moment';
import { User } from 'src/auth/users/entities/user.entity';

@Injectable()
export class PeriodTypeService {

  private readonly logger = new Logger('PeriodTypeService');

  constructor(
    @InjectRepository(PeriodType)
    private readonly periodTypeRepository: Repository<PeriodType>
  ) { }

  async create(createPeriodTypeDto: CreatePeriodTypeDto, user: User) {
    const { full_name, fk_employee } = user;
    if (!(typeof fk_employee == 'object')) throw new NotFoundException(`no existe employee`)
    const audit = {
      user_create: [user.id, full_name, `${fk_employee.dni}`, `${fk_employee.first_name} ${fk_employee.last_name}`],
      created_at: moment().format('YYYY-MM-DD HH:mm:ss')
    }

    try {
      const periodType = this.periodTypeRepository.create({
        ...createPeriodTypeDto,
        ...audit
      })
      await this.periodTypeRepository.save(periodType)
      return periodType;

    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('ayuda')
    }
  }

  findAll() {
    return this.periodTypeRepository.find({
      where: { is_active: true }
    })
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
