import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreatePersonalReferenceDto } from './dto/create-personal-reference.dto';
import { UpdatePersonalReferenceDto } from './dto/update-personal-reference.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonalReference } from './entities/personal-reference.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonalReferenceService {

  private readonly logger= new Logger('PersonalReferenceService');

  constructor(
    @InjectRepository(PersonalReference)
    private readonly personalReferenceRepository: Repository<PersonalReference>
  ){}

  async create(createPersonalReferenceDto: CreatePersonalReferenceDto) {
    const personalReference=this.personalReferenceRepository.create(createPersonalReferenceDto)
    await this.personalReferenceRepository.save(personalReference)
    return personalReference;
  }

  findAll() {
    return `This action returns all personalReference`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personalReference`;
  }

  update(id: number, updatePersonalReferenceDto: UpdatePersonalReferenceDto) {
    return `This action updates a #${id} personalReference`;
  }

  remove(id: number) {
    return `This action removes a #${id} personalReference`;
  }

  private handleExceptions(error: any) {
    if (error.code='23505') throw new BadRequestException(error.detail)
    this.logger.error(error)
    throw new InternalServerErrorException('Unexpected error, check server logs')
  }

  async deleteAllReference(){
    const query= this.personalReferenceRepository.createQueryBuilder('reference')
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleExceptions(error)
    }
  }
}
