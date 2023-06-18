import { Injectable } from '@nestjs/common';
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
    private readonly personalReferenceService: PersonalReferenceService
  ) { }

  async runSeed() {
    await this.deleteDataBase();
    await this.seedInsertHousingType();
    await this.seedInsertCivilStatus();
    await this.seedInsertPeriodType();
    await this.seedInsertFinancialInterestRate();
    // TODO: roles
    // await this.seedInsertRoles();
    await this.seedInsertEmployees();
    // TODO: customers
    await this.seedInsertCustomers() //! el customer insertara business, files, avales, personal_reference,credit;
    return 'SEED EXECUTED';
  }

  private async deleteDataBase() {
    // avales
    // personalReference
    // credits
    // business
    // customer
    // Employees
    // financialInterestRate
    // periodtype
    // civil status
    // housing type
    await this.avalesService.deleteAllAvales()
    await this.personalReferenceService.deleteAllReference();
    await this.creditService.deleteAllCredits();
    await this.businessService.deleteAllBusiness();
    await this.customersService.deleteAllCustomers();
    await this.employeesService.deleteAllEmployees();
    await this.financialInterestRateService.deleteAllFinancialInterestRate();
    await this.periodTypeService.deleteAllPeriodType();
    await this.civilStatusService.deleteAllCivilStatus();
    await this.housingTypeService.deleteAllHousingType();
    return true
  }

  private async seedInsertHousingType() {
    const housingType = initialData.housingType
    const insertPromises = [];
    housingType.forEach((item) => {
      insertPromises.push(this.housingTypeService.create(item));
    })
    await Promise.all(insertPromises)
    return true;
  }

  private async seedInsertCivilStatus() {
    const civilStatus = initialData.civilStatus
    const insertPromises = [];
    civilStatus.forEach((item) => {
      insertPromises.push(this.civilStatusService.create(item));
    })
    await Promise.all(insertPromises)
    return true;
  }

  private async seedInsertPeriodType() {
    const periodType = initialData.periodType
    const insertPromises = [];
    periodType.forEach((item) => {
      insertPromises.push(this.periodTypeService.create(item));
    })
    await Promise.all(insertPromises)
    return true;
  }

  private async seedInsertFinancialInterestRate() {
    const financialInterestRate = initialData.financialInterestRate
    const insertPromises = [];
    financialInterestRate.forEach((item) => {
      insertPromises.push(this.financialInterestRateService.create(item));
    })
    await Promise.all(insertPromises)
    return true;
  }

  private async seedInsertEmployees() {
    const employees = initialData.employees
    const insertPromises = [];
    employees.forEach((item) => {
      insertPromises.push(this.employeesService.create(item));
    })
    await Promise.all(insertPromises)
    return true;
  }

  private async seedInsertRoles() {
    const employees = initialData.employees
    const insertPromises = [];
    employees.forEach((item) => {
      insertPromises.push(this.employeesService.create(item));
    })
    await Promise.all(insertPromises)
    return true;
  }

  private async seedInsertCustomers() {
    // TODO: Crear Customer
    // TODO: Crear Business
    // TODO: Crear Aval
    // TODO: Crear PersonalReference
    // TODO: Crear Credit
    return true;
  }

}



