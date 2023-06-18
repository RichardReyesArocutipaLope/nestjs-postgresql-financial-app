import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UpdateCreditDto } from './dto/update-credit.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Credit } from './entities/credit.entity';
@Injectable()
export class CreditService {

  private readonly logger = new Logger('CreditService');

  constructor(
    @InjectRepository(Credit)
    private readonly creditRepository: Repository<Credit>
  ) { }

  async create(createCreditDto: CreateCreditDto) {
    try {

      const credit = this.creditRepository.create(createCreditDto);
      await this.creditRepository.save(credit);

      return credit

    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Ayuda')
    }
  }

  findAll() {
    return `This action returns all credits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} credit`;
  }

  update(id: number, updateCreditDto: UpdateCreditDto) {
    return `This action updates a #${id} credit`;
  }

  remove(id: number) {
    return `This action removes a #${id} credit`;
  }


  private handleExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail)
    this.logger.error(error)
    throw new InternalServerErrorException('Unexpected error, check server logs')
  }
  
  async deleteAllCredits() {
    const query = this.creditRepository.createQueryBuilder('product')
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleExceptions(error)
    }
  }

}
