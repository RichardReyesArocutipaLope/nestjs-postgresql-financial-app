import { Injectable } from '@nestjs/common';
import { CivilStatusService } from 'src/catalogue/civil-status/civil-status.service';
import { EmployeesService } from 'src/catalogue/employees/employees.service';
import { HousingTypeService } from 'src/catalogue/housing-type/housing-type.service';
import { CreditService } from 'src/credits/credit/credit.service';
import { FinancialInterestRateService } from 'src/credits/financial-interest-rate/financial-interest-rate.service';
import { PeriodTypeService } from 'src/credits/period-type/period-type.service';
import { initialData } from './data/seed-data';


@Injectable()
export class SeedService {

  constructor(
    private readonly creditService: CreditService,
    private readonly financialInterestRateService: FinancialInterestRateService,
    private readonly employeesService: EmployeesService,
    private readonly housingTypeService: HousingTypeService,
    private readonly civilStatusService: CivilStatusService,
    private readonly periodTypeService: PeriodTypeService
  ) { }

  async runSeed() {

    await this.seedInsertPeriodType();
    await this.seedInsertFinancialInterestRate();
    await this.seedInsertHousingType();
    await this.seedInsertCivilStatus();
    await this.seedInsertEmployees();
    await this.seedInsertCredits();
    return 'SEED EXECUTED';
  }

  private async seedInsertPeriodType() {
    await this.periodTypeService.deleteAllPeriodType()
    const periodType = initialData.periodType
    const insertPromises=[];
    periodType.forEach((item)=>{
      insertPromises.push(this.periodTypeService.create(item));
    })
    await Promise.all(insertPromises)
    return true;
  }

  private async seedInsertFinancialInterestRate() {
    await this.financialInterestRateService.deleteAllFinancialInterestRate()
    const financialInterestRate = initialData.financialInterestRate
    const insertPromises=[];
    financialInterestRate.forEach((item)=>{
      insertPromises.push(this.financialInterestRateService.create(item));
    })
    await Promise.all(insertPromises)
    return true;
  }

  private async seedInsertHousingType() {
    await this.housingTypeService.deleteAllHousingType()
    const housingType = initialData.housingType
    const insertPromises=[];
    housingType.forEach((item)=>{
      insertPromises.push(this.housingTypeService.create(item));
    })
    await Promise.all(insertPromises)
    return true;
  }

  private async seedInsertCivilStatus() {
    await this.civilStatusService.deleteAllCivilStatus()
    const financialInterestRate = initialData.financialInterestRate
    return true;
  }

  private async seedInsertEmployees() {
    await this.employeesService.deleteAllEmployees()
    const civilStatus = initialData.civilStatus
    return true;
  }


  private async seedInsertCredits() {
    await this.creditService.deleteAllCredits()
    return true;
  }

}
