import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CivilStatusService } from 'src/catalogue/civil-status/civil-status.service';
import { EmployeesService } from 'src/catalogue/employees/employees.service';
import { HousingTypeService } from 'src/catalogue/housing-type/housing-type.service';
import { CreditService } from 'src/credits/credit/credit.service';
import { FinancialInterestRateService } from 'src/credits/financial-interest-rate/financial-interest-rate.service';
import { PeriodTypeService } from 'src/credits/period-type/period-type.service';
import { initialData } from './data/seed-data';
import { BusinessService } from '../catalogue/business/business.service';
import { CustomersService } from '../catalogue/customers/customers.service';
import { AvalesService } from '../catalogue/avales/avales.service';
import { PersonalReferenceService } from '../catalogue/personal-reference/personal-reference.service';
import { RolesService } from 'src/security/roles/roles.service';
import { UsersService } from 'src/auth/users/users.service';
import { User } from 'src/auth/users/entities/user.entity';
import { Employee } from 'src/catalogue/employees/entities/employee.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SeedService {
  constructor(
    private readonly creditService: CreditService,
    private readonly financialInterestRateService: FinancialInterestRateService,
    private readonly employeesService: EmployeesService,
    private readonly housingTypeService: HousingTypeService,
    private readonly civilStatusService: CivilStatusService,
    private readonly periodTypeService: PeriodTypeService,
    private readonly businessService: BusinessService,
    private readonly customersService: CustomersService,
    private readonly avalesService: AvalesService,
    private readonly personalReferenceService: PersonalReferenceService,
    private readonly rolesService: RolesService,
    private readonly usersService: UsersService,

    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

  ) { }

  async runSeed() {
    await this.deleteDataBase();
    const user = await this.seedFirstUser();
    await this.seedInsertHousingType(user);
    await this.seedInsertCivilStatus(user);
    await this.seedInsertPeriodType(user);
    await this.seedInsertFinancialInterestRate(user);
    await this.seedInsertRoles(user);
    await this.seedInsertEmployees(user);
    await this.seedInsertUsers(user);
    await this.seedInsertCredits(user);
    return 'SEED EXECUTED';
  }

  private async deleteDataBase() {
    await this.avalesService.deleteAllAvales();
    await this.personalReferenceService.deleteAllReference();
    await this.creditService.deleteAllCredits();
    await this.customersService.deleteAllCustomers();
    await this.businessService.deleteAllBusiness();
    await this.usersService.deleteAllUsers();
    await this.rolesService.deleteAllRoles();
    await this.employeesService.deleteAllEmployees();
    await this.financialInterestRateService.deleteAllFinancialInterestRate();
    await this.periodTypeService.deleteAllPeriodType();
    await this.civilStatusService.deleteAllCivilStatus();
    await this.housingTypeService.deleteAllHousingType();
    return true
  }

  private async seedFirstUser() {
    try {
      const firsEmployeeData = initialData.firsEmployee
      const firstUserData = initialData.firstUser

      const firstEmployee = this.employeeRepository.create(firsEmployeeData)
      const saveFirstEmployee = await this.employeeRepository.save(firstEmployee)

      const firstUser = this.userRepository.create({
        ...firstUserData,
        fk_employee: saveFirstEmployee
      })
      const saveFirstUser = await this.userRepository.save(firstUser)
      return saveFirstUser

    } catch (error) {
      throw new InternalServerErrorException('seedFirstUser')
    }
  }

  private async seedInsertHousingType(user: User) {
    const housingType = initialData.housingType
    const insertPromises = [];
    housingType.forEach((item) => {
      insertPromises.push(this.housingTypeService.create(item, user));
    })
    await Promise.all(insertPromises)
    return true;
  }

  private async seedInsertCivilStatus(user: User) {
    const civilStatus = initialData.civilStatus
    const insertPromises = [];
    civilStatus.forEach((item) => {
      insertPromises.push(this.civilStatusService.create(item, user));
    })
    await Promise.all(insertPromises)
    return true;
  }

  private async seedInsertPeriodType(user: User) {
    const periodType = initialData.periodType
    const insertPromises = [];
    periodType.forEach((item) => {
      insertPromises.push(this.periodTypeService.create(item, user));
    })
    await Promise.all(insertPromises)
    return true;
  }

  private async seedInsertFinancialInterestRate(user: User) {
    const financialInterestRate = initialData.financialInterestRate
    const insertPromises = [];
    financialInterestRate.forEach((item) => {
      insertPromises.push(this.financialInterestRateService.create(item, user));
    })
    await Promise.all(insertPromises)
    return true;
  }

  private async seedInsertEmployees(user: User) {
    const employees = initialData.employees
    for (const item of employees) {
      await this.employeesService.create(item, user);
    }
    return true;
  }

  private async seedInsertRoles(user: User) {
    const roles = initialData.roles
    for (const item of roles) {
      await this.rolesService.create(item, user);
    }
    return true;
  }

  private async seedInsertUsers(user: User) {
    const users = initialData.users
    for (const item of users) {
      await this.usersService.create(item, user);
    }
    return true;
  }

  private async seedInsertCredits(user: User) {
    const credits = initialData.credits
    const insertPromises = [];
    credits.forEach((item) => {
      insertPromises.push(this.creditService.create(item, user));
    })
    await Promise.all(insertPromises)
    return true;
  }
}
