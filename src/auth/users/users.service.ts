import { BadRequestException, Injectable, InternalServerErrorException, Logger, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as moment from 'moment';
import * as bcrypt from 'bcrypt'
import { LoginUserDto } from './dto/login-user.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {

  private readonly logger = new Logger('UsersService');

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly jwtService: JwtService,
  ) { }

  async create(createUserDto: CreateUserDto, user: User) {
    const { full_name, fk_employee } = user;
    if (!(typeof fk_employee == 'object')) throw new NotFoundException(`no existe employee`)
    const audit = {
      user_create: [user.id, full_name, `${fk_employee.dni}`, `${fk_employee.first_name} ${fk_employee.last_name}`],
      created_at: moment().format('YYYY-MM-DD HH:mm:ss')
    }

    try {
      const { password, ...userData } = createUserDto
      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password, 10),
        ...audit
      })
      await this.userRepository.save(user)
      delete user.password;
      return {
        user,
        token: this.getJwtToken({ id: user.id })
      };

    } catch (error) {
      this.handleExceptions(error)
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const { password, full_name } = loginUserDto;
    const user = await this.userRepository.findOne({
      where: { full_name },
      select: { full_name: true, password: true, id: true }
    })

    if (!user) throw new UnauthorizedException('Credentails are not valid ( fullName )')

    if (!bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException('Credentails are not valid ( password )')

    return {
      user,
      token: this.getJwtToken({ id: user.id })
    };

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

  private getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }

  private handleExceptions(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail)
    console.log(error)
    this.logger.error(error)
    throw new InternalServerErrorException('Unexpected error, check server logs')
  }

  async deleteAllUsers() {
    const query = this.userRepository.createQueryBuilder('deleteAllUsers')
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleExceptions(error)
    }
  }
}
