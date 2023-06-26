import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateAvalDto } from './dto/create-aval.dto';
import { UpdateAvalDto } from './dto/update-aval.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aval } from './entities/aval.entity';
import { Repository } from 'typeorm';
import * as moment from 'moment';
import { User } from 'src/auth/users/entities/user.entity';


@Injectable()
export class AvalesService {
  
  private readonly logger=new Logger('AvalesService')

  constructor(
    @InjectRepository(Aval)
    private readonly avalRepository: Repository<Aval>
  ){}

  async create(createAvalDto: CreateAvalDto, user: User) {

    const { full_name, fk_employee } = user;
    if (!(typeof fk_employee == 'object')) throw new NotFoundException(`no existe employee`)
    const audit = {
      user_create: [user.id, full_name, `${fk_employee.dni}`, `${fk_employee.first_name} ${fk_employee.last_name}`],
      created_at: moment().format('YYYY-MM-DD HH:mm:ss')
    }

    const aval=this.avalRepository.create({
      ...createAvalDto,
      ...audit
    })
    await this.avalRepository.save(aval)
    return aval;
  }

  findAll() {
    return `This action returns all avales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} avale`;
  }

  update(id: number, updateAvalDto: UpdateAvalDto) {
    return `This action updates a #${id} avale`;
  }

  remove(id: number) {
    return `This action removes a #${id} avale`;
  }

  private handleExceptions(error: any) {
    if (error.code='23505') throw new BadRequestException(error.detail)
    this.logger.error(error)
    throw new InternalServerErrorException('Unexpected error, check server logs')
  }

  async deleteAllAvales(){
    const query= this.avalRepository.createQueryBuilder('aval')
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleExceptions(error)
    }
  }

}
