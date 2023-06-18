import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateFinancialInterestRateDto } from './dto/create-financial-interest-rate.dto';
import { UpdateFinancialInterestRateDto } from './dto/update-financial-interest-rate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FinancialInterestRate } from './entities/financial-interest-rate.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FinancialInterestRateService {

  private readonly logger= new Logger('FinancialInterestRateService')

  constructor(
    @InjectRepository(FinancialInterestRate)
    private readonly financialInterestRateRepository: Repository<FinancialInterestRate>
  ) { }

  async create(createFinancialInterestRateDto: CreateFinancialInterestRateDto) {
    try {

      const financialInterestRate = this.financialInterestRateRepository.create(createFinancialInterestRateDto)
      await this.financialInterestRateRepository.save(financialInterestRate)
      return financialInterestRate

    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('ayuda')
    }
  }

  findAll() {
    return `This action returns all financialInterestRate`;
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
