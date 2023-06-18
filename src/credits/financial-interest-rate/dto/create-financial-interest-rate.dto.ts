import { IsString } from "class-validator";

export class CreateFinancialInterestRateDto {
    @IsString()
    name:string;
}
