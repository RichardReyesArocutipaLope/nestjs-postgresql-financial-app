import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateFinancialInterestRateDto } from './dto/create-financial-interest-rate.dto';
import { UpdateFinancialInterestRateDto } from './dto/update-financial-interest-rate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FinancialInterestRate } from './entities/financial-interest-rate.entity';
import { Repository } from 'typeorm';
import * as moment from 'moment';
import { User } from 'src/auth/users/entities/user.entity';

@Injectable()
export class FinancialInterestRateService {

  private readonly logger = new Logger('FinancialInterestRateService')

  constructor(
    @InjectRepository(FinancialInterestRate)
    private readonly financialInterestRateRepository: Repository<FinancialInterestRate>
  ) { }

  async create(createFinancialInterestRateDto: CreateFinancialInterestRateDto, user: User) {

    const { full_name, fk_employee } = user;
    if (!(typeof fk_employee == 'object')) throw new NotFoundException(`no existe employee`)
    const audit = {
      user_create: [user.id, full_name, `${fk_employee.dni}`, `${fk_employee.first_name} ${fk_employee.last_name}`],
      created_at: moment().format('YYYY-MM-DD HH:mm:ss')
    }

    try {
      const financialInterestRate = this.financialInterestRateRepository.create({
        ...createFinancialInterestRateDto,
        ...audit
      })
      await this.financialInterestRateRepository.save(financialInterestRate)
      return financialInterestRate

    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('ayuda')
    }
  }

  findAll() {
    return this.financialInterestRateRepository.find({
      where: { is_active: true }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} financialInterestRate`;
  }

  update(id: number, updateFinancialInterestRateDto: UpdateFinancialInterestRateDto) {
    return `This action updates a #${id} financialInterestRate`;
  }

  remove(id: number) {
    return `This action removes a #${id} financialInterestRate`;
  }

  private handleExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail)
    this.logger.error(error)
    throw new InternalServerErrorException('Unexpected error, check server logs')
  }

  async deleteAllFinancialInterestRate() {
    const query = this.financialInterestRateRepository.createQueryBuilder('financialInterestRate')
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleExceptions(error)
    }
  }

}
