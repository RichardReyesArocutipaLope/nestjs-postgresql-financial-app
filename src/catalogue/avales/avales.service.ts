import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateAvalDto } from './dto/create-aval.dto';
import { UpdateAvalDto } from './dto/update-aval.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aval } from './entities/aval.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AvalesService {
  
  private readonly logger=new Logger('AvalesService')

  constructor(
    @InjectRepository(Aval)
    private readonly avalRepository: Repository<Aval>
  ){}

  async create(createAvalDto: CreateAvalDto) {

    const aval=this.avalRepository.create(createAvalDto)
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
