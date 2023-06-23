import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UpdateCreditDto } from './dto/update-credit.dto';
import { Brackets, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Credit } from './entities/credit.entity';
import { Customer } from 'src/catalogue/customers/entities/customer.entity';
import { Business } from 'src/catalogue/business/entities/business.entity';
import { Aval } from 'src/catalogue/avales/entities/aval.entity';
import { PersonalReference } from 'src/catalogue/personal-reference/entities/personal-reference.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { FilterCreditDto } from './dto/filter-credit.dto';
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
      const { aval, personalReference, customer, business, ...credit } = createCreditDto

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
        Aval: { ...newAval },
        PersonalReference: { ...newPersonalReference }
      }

    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Ayuda')
    }
  }

  async findAll(paginationDto: PaginationDto, filterCreditDto: FilterCreditDto) {

    const { limit = 10, offset = 0 } = paginationDto
    const { search_value = null, state = null, date_range_first = null, date_range_last = null, money_range_first = null,
      money_range_last = null, id_analista = null, id_cobrador = null, } = filterCreditDto

    console.log(filterCreditDto)

    const queryBuilder = this.creditRepository.createQueryBuilder('credit');
    const credits = await queryBuilder.select([
      "credit.id AS id_credit",
      "CONCAT(customer.first_name, ' ', customer.last_name) AS cliente",
      "customer.dni AS dni",
      "credit.requested_money AS Prestamo",
      "credit.state AS estado",
      "CONCAT(credit.period, ' ', period_type.name) AS Plazo",
      "credit.interest_rate",
      "CONCAT(analista.first_name,' ',analista.last_name) AS Analista",
      "CONCAT(cobrador.first_name,' ',cobrador.last_name) AS Cobrador"
    ])
      .innerJoin("credit.fk_customer", "customer")
      .innerJoin("credit.fk_employee_cobrador", "cobrador")
      .innerJoin("credit.fk_employee_analista", "analista")
      .innerJoin("credit.fk_period_type", "period_type")
      .where(new Brackets((qb) => {
          qb.where("credit.state=:state", { state })
            .orWhere("cast(:state as text) is null ", { state })
        }))
      .andWhere(new Brackets((qb2) => {
          qb2.where("customer.dni=:dni", { dni: +search_value, })
            .orWhere("CONCAT(customer.first_name, ' ', customer.last_name) LIKE :client ", { client: `%${search_value}%` })
            .orWhere("cast(:term as text) is null ", { term: search_value })
        }))
      .andWhere(new Brackets((qb3) => {
          qb3.where("credit.date_of_issue BETWEEN :date_range_first AND :date_range_last", { date_range_first, date_range_last })
            .orWhere("cast(:date_range_first as date) is null", { date_range_first })
        }))
      .andWhere(new Brackets((qb4) => {
          qb4.where("credit.requested_money BETWEEN :money_range_first AND :money_range_last", { money_range_first, money_range_last })
            .orWhere("cast(:money_range_first as numeric) is null", { money_range_first })
        }))
      .andWhere(new Brackets((qb5) => {
          qb5.where("analista.id=:id_analista", { id_analista })
            .orWhere("cast(:id_analista as numeric) is null", { id_analista })
        }))
      .andWhere(new Brackets((qb6) => {
        qb6.where("cobrador.id=:id_cobrador", { id_cobrador })
          .orWhere("cast(:id_cobrador as numeric) is null", { id_cobrador })
      }))
      .orderBy("credit.id", "ASC")
      .offset(offset)
      .limit(limit)
      .getRawMany();

    return credits;
  }

  async findOne(id: number) {
    const credit = await this.creditRepository.findOneBy({ id })
    if (!credit) throw new NotFoundException(`Credit with ID ${id} not found`)
    return credit
  }

  update(id: number, updateCreditDto: UpdateCreditDto) {
    return `This action updates a #${id} credit`;
    // aprobar desembolsar
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
