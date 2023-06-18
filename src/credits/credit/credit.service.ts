import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UpdateCreditDto } from './dto/update-credit.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Credit } from './entities/credit.entity';
@Injectable()
export class CreditService {

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
}
