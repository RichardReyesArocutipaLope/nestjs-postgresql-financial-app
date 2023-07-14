import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import * as moment from 'moment';
import { User } from 'src/auth/users/entities/user.entity';

@Injectable()
export class RolesService {

  private readonly logger = new Logger('RolesService')

  constructor(
    @InjectRepository(Role)
    private readonly rolesRepository: Repository<Role>
  ) { }

  async create(createRoleDto: CreateRoleDto, user: User) {

    const { full_name, fk_employee } = user;
    if (!(typeof fk_employee == 'object')) throw new NotFoundException(`no existe employee`)
    const audit = {
      user_create: [user.id, full_name, `${fk_employee.dni}`, `${fk_employee.first_name} ${fk_employee.last_name}`],
      created_at: moment().format('YYYY-MM-DD HH:mm:ss')
    }

    try {
      const rol = this.rolesRepository.create({
        ...createRoleDto,
        ...audit
      })
      await this.rolesRepository.save(rol)
      return rol
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('AIUDA')
    }
  }


  findAll() {
    return this.rolesRepository.find({
      relations: {
        user: true,
      }
    })
  }

  findOneByName(name: string) {
    return this.rolesRepository.findOne({
      where: { name },
      relations: {
        user: true,
      }
    })
  }


  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }

  private handleExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail)
    this.logger.error(error)
    throw new InternalServerErrorException('Unexpected error, check server logs')
  }

  async deleteAllRoles() {
    const query = this.rolesRepository.createQueryBuilder('deleteAllRoles')
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleExceptions(error)
    }
  }
}
