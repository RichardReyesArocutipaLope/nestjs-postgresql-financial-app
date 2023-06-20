import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UpdateCreditDto } from './dto/update-credit.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Credit } from './entities/credit.entity';
import { Customer } from 'src/catalogue/customers/entities/customer.entity';
import { Business } from 'src/catalogue/business/entities/business.entity';
import { Aval } from 'src/catalogue/avales/entities/aval.entity';
import { PersonalReference } from 'src/catalogue/personal-reference/entities/personal-reference.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
@Injectable()
export class CreditService {

  private readonly logger = new Logger('CreditService');

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

  async create(createCreditDto: CreateCreditDto) {
    try {
      const { aval, personalReference, customer, business, ...credit} = createCreditDto

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
        Credit: savedCredit,
        Aval: {...newAval},
        PersonalReference: {...newPersonalReference}
      }

    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Ayuda')
    }
  }

  findAll(paginationDto:PaginationDto) {

    const {limit= 10, offset=0}= paginationDto

    return this.creditRepository.find({
      take:limit,
      skip:offset

      // TODO relaciones
    })
  }

  async findOne(id: number) {
    const credit= await  this.creditRepository.findOneBy({id})
    if(!credit) throw new NotFoundException(`Credit with ID ${id} not found`)
    return credit
  }

  update(id: number, updateCreditDto: UpdateCreditDto) {
    return `This action updates a #${id} credit`;
  }

  async remove(id: number) {
    const credit = await this.findOne(id)
    return credit
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
