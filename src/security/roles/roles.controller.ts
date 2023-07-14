import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ValidRoles } from 'src/auth/users/interfaces/valid-roles';
import { Auth, GetUser } from 'src/auth/users/decorators';
import { User } from 'src/auth/users/entities/user.entity';

@Controller('security/roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) { }

  @Post()
  @Auth(ValidRoles.administrador)
  create(@Body() createRoleDto: CreateRoleDto, @GetUser() user: User) {
    return this.rolesService.create(createRoleDto, user);
  }

  @Get()
  @Auth()
  findAll() {
    return this.rolesService.findAll();
  }

  @Get('name/:name')
  @Auth()
  findOneByName(@Param('name') name: string) {
    return this.rolesService.findOneByName(name);
  }

  @Get(':id')
  @Auth()
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
