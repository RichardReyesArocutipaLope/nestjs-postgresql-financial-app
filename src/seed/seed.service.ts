import { Injectable } from '@nestjs/common';


@Injectable()
export class SeedService {
  async runSeed() {
    return 'SEED EXECUTED';
  }

  private async seedInsertPeriodType(){

  }

  private async seedInsertFinancialInterestRate(){
    
  }

  private async seedInsertEmployees(){
    
  }

  private async seedInsertHousingType(){
    
  }

  private async seedInsertCivilStatus(){
    
  }

}
