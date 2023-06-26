import { Injectable, BadRequestException, Logger, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Business } from './entities/business.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/users/entities/user.entity';
import * as moment from 'moment';

@Injectable()
export class BusinessService {

  private readonly logger = new Logger('BusinessService')

  constructor(
    @InjectRepository(Business)
    private readonly businessRepository: Repository<Business>
  ){}

  async create(createBusinessDto: CreateBusinessDto, user: User) {

    const { full_name, fk_employee } = user;
    if (!(typeof fk_employee == 'object')) throw new NotFoundException(`no existe employee`)
    const audit = {
      user_create: [user.id, full_name, `${fk_employee.dni}`, `${fk_employee.first_name} ${fk_employee.last_name}`],
      created_at: moment().format('YYYY-MM-DD HH:mm:ss')
    }

    try {
      const business= this.businessRepository.create({
        ...createBusinessDto,
        ...audit
      })
      await this.businessRepository.save(business)
      return business;
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Ayuda')

    }
  }

  findAll() {
    return `This action returns all business`;
  }

  findOne(id: number) {
    return `This action returns a #${id} business`;
  }

  update(id: number, updateBusinessDto: UpdateBusinessDto) {
    return `This action updates a #${id} business`;
  }

  remove(id: number) {
    return `This action removes a #${id} business`;
  }

  private handleExceptions(error: any) {
    if (error.code='23505') throw new BadRequestException(error.detail)
    this.logger.error(error)
    throw new InternalServerErrorException('Unexpected error, check server logs')
  }

  async deleteAllBusiness(){
    const query= this.businessRepository.createQueryBuilder('business')
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleExceptions(error)
    }
  }


}
