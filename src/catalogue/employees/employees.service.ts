import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {

  private readonly logger = new Logger('EmployeesService')

  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>
  ) { }

  async create(createEmployeeDto: CreateEmployeeDto) {

    try {

      const employee = this.employeeRepository.create(createEmployeeDto);
      await this.employeeRepository.save(employee);

      return employee

    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Ayuda')
    }

  }

  findAll() {
    return `This action returns all employees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }

  private handleExceptions(error: any) {
    if (error.code='23505') throw new BadRequestException(error.detail)
    this.logger.error(error)
    throw new InternalServerErrorException('Unexpected error, check server logs')
  }

  async deleteAllEmployees(){
    const query= this.employeeRepository.createQueryBuilder('employee')
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleExceptions(error)
    }
  }

}
