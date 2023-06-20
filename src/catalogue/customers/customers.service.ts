import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException, Query } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { Business } from '../business/entities/business.entity';
import { Credit } from 'src/credits/credit/entities/credit.entity';
import { Aval } from '../avales/entities/aval.entity';
import { PersonalReference } from '../personal-reference/entities/personal-reference.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class CustomersService {

  private readonly logger = new Logger('CustomersService')

  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,

  ) { }
  async create(createCustomerDto: CreateCustomerDto) {
    try {
  
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Ayuda')
    }
  }

  // TODO: paginar
  findAll(paginationDto: PaginationDto) {

    const { limit = 10, offset = 0 } = paginationDto

    return this.customerRepository.find({
      take: limit,
      skip: offset,
    })
  }

  async findOne(id: number) {

    const customer = await this.customerRepository.findOneBy({ id })
    if (!customer) throw new NotFoundException(`Customer with id ${id} not found`)
    return customer
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }


  private handleExceptions(error: any) {
    if (error.code = '23505') throw new BadRequestException(error.detail)
    this.logger.error(error)
    throw new InternalServerErrorException('Unexpected error, check server logs')
  }

  async deleteAllCustomers() {
    const query = this.customerRepository.createQueryBuilder('customer')
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleExceptions(error)
    }
  }
}
