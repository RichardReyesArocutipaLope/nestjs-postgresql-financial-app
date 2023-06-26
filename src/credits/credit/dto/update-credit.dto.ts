import { IsArray, IsBoolean, IsIn, IsInt, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { UpdateAvalDto } from "src/catalogue/avales/dto/update-aval.dto";
import { UpdateBusinessDto } from "src/catalogue/business/dto/update-business.dto";
import { UpdateCustomerDto } from "src/catalogue/customers/dto/update-customer.dto";
import { UpdatePersonalReferenceDto } from "src/catalogue/personal-reference/dto/update-personal-reference.dto";

export class UpdateCreditDto {

    @IsNumber()
    @IsPositive()
    @IsOptional()
    requested_money?:number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    approved_money?:number;

    @IsString()
    @IsOptional()
    date_of_issue?:string;

    @IsString()
    @IsOptional()
    disbursement_date?:string;

    @IsInt()
    @IsPositive()
    @IsOptional()
    period?:number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    interest_rate?:number;

    @IsString()
    @IsOptional()
    @IsIn(['NU','RE','AP','DE','RE'])
    state?:string;

    @IsBoolean()
    @IsOptional()
    is_active?: boolean;

    @IsString()
    @IsOptional()
    observation?:string;

    @IsOptional()
    aval?: UpdateAvalDto

    @IsOptional()
    personalReference?: UpdatePersonalReferenceDto

    @IsOptional()
    business?: UpdateBusinessDto

    @IsOptional()
    customer?: UpdateCustomerDto

    @IsNumber()
    @IsOptional()
    fk_employee_cobrador?: number

    @IsNumber()
    @IsOptional()
    fk_employee_analista?: number

    @IsNumber()
    @IsOptional()
    fk_financial_interest?: number

    @IsNumber()
    @IsOptional()
    fk_period_type?: number

}
