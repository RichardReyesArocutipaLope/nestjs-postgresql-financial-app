import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorators/get-user.decorator';
import { User } from './entities/user.entity';
import { RawHeaders } from './decorators/raw-headers.decorator';
import { UserRoleGuard } from './guards/user-role/user-role.guard';
import { RolProtected } from './decorators/rol-protected.decorator';
import { ValidRoles } from './interfaces/valid-roles';
import { Auth } from './decorators';
import { PassportModule } from '@nestjs/passport';

@Controller('auth/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('register')
  @Auth(ValidRoles.administrador)
  createUser(@Body() createUserDto: CreateUserDto, @GetUser() user: User) {
    return this.usersService.create(createUserDto, user);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.usersService.login(loginUserDto);
  }

  @Get('private')
  @UseGuards(AuthGuard())
  testingPrivateRoute(
    @Req() request: Express.Request,
    @GetUser() user: User,
    @GetUser('full_name') userName: string,
    @RawHeaders() rawHeaders: string[],
  ) {
    console.log(request)
    return {
      ok: true,
      message: 'Hola Mundo Private',
      user,
      userName,
      rawHeaders
    }
  }

  @Get('private2')
  @RolProtected(ValidRoles.administrador, ValidRoles.analista)
  @UseGuards(AuthGuard(), UserRoleGuard)
  privateRoute2(
    @GetUser() user: User,
  ) {
    return {
      ok: true,
      user
    }
  }


  @Get('private3')
  @Auth(ValidRoles.administrador, ValidRoles.analista)
  privateRoute3(
    @GetUser() user: User,
  ) {
    return {
      ok: true,
      user
    }
  }



  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }


}
