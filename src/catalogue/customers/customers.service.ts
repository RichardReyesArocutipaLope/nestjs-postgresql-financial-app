import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { Business } from '../business/entities/business.entity';
import { Credit } from 'src/credits/credit/entities/credit.entity';
import { Aval } from '../avales/entities/aval.entity';
import { PersonalReference } from '../personal-reference/entities/personal-reference.entity';

@Injectable()
export class CustomersService {

  private readonly logger = new Logger('CustomersService')

  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,

    @InjectRepository(Business)
    private readonly businessRepository: Repository<Business>,

    @InjectRepository(Credit)
    private readonly creditRepository: Repository<Credit>,

    @InjectRepository(Aval)
    private readonly avalRepository: Repository<Aval>,

    @InjectRepository(PersonalReference)
    private readonly personalReferenceRepository: Repository<PersonalReference>

  ) { }

  async create(createCustomerDto: CreateCustomerDto) {
    try {

      const { business, credit, credit: { aval, personalReference }, ...customer } = createCustomerDto

      const newBusiness = this.businessRepository.create(business)
      const savedBusiness = await this.businessRepository.save(newBusiness)

      const newCustomer = this.customerRepository.create({ ...customer, business: savedBusiness })
      const savedCustomer = await this.customerRepository.save(newCustomer)

      const newCredit = this.creditRepository.create({ ...credit, fk_customer: savedCustomer })
      const savedCredit = await this.creditRepository.save(newCredit)

      const newAval = this.avalRepository.create({ ...aval, fk_credit: savedCredit })
      const savedAval = await this.avalRepository.save(newAval)

      const newPersonalReference = this.personalReferenceRepository.create({ ...personalReference, fk_credit: savedCredit })
      const savedPersonalReference = await this.personalReferenceRepository.save(newPersonalReference)


      return {
        Customer: savedCustomer,
        Business: savedBusiness,
        Credit: savedCredit,
        Aval: savedAval,
        PersonalReference: savedPersonalReference
      }
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Ayuda')

    }
  }

  // TODO: paginar
  findAll() {
    return this.customerRepository.find({})
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
