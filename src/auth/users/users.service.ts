import { BadRequestException, Injectable, InternalServerErrorException, Logger, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt'
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {

  private readonly logger = new Logger('UsersService');

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto) {

    try {
      const { password, ...userData } = createUserDto
      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password, 10)
      })
      await this.userRepository.save(user)
      delete user.password;
      return user;
      // TODO: retornar JWT
    } catch (error) {
      this.handleExceptions(error)
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const { password, full_name } = loginUserDto;
    const user = await this.userRepository.findOne({
      where: { full_name },
      select: { full_name: true, password: true }
    })

    if (!user) throw new UnauthorizedException('Credentails are not valid ( fullName )')

    if (!bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException('Credentails are not valid ( password )')

    return user;

    //TODO: retornar JWT de acceso

  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private handleExceptions(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail)
    this.logger.error(error)
    throw new InternalServerErrorException('Unexpected error, check server logs')
  }
}
