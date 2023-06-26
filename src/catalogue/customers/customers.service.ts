import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException, Query } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import * as moment from 'moment';
import { User } from 'src/auth/users/entities/user.entity';

@Injectable()
export class CustomersService {

  private readonly logger = new Logger('CustomersService')

  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,

  ) { }
  async create(createCustomerDto: CreateCustomerDto, user: User) {

    const { full_name, fk_employee } = user;
    if (!(typeof fk_employee == 'object')) throw new NotFoundException(`no existe employee`)
    const audit = {
      user_create: [user.id, full_name, `${fk_employee.dni}`, `${fk_employee.first_name} ${fk_employee.last_name}`],
      created_at: moment().format('YYYY-MM-DD HH:mm:ss')
    }

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
