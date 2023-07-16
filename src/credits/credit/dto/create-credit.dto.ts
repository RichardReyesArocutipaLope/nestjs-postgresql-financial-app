import { IsBoolean, IsIn, IsInt, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { CreateAvalDto } from "src/catalogue/avales/dto/create-aval.dto";
import { CreateBusinessDto } from "src/catalogue/business/dto/create-business.dto";
import { CreateCustomerDto } from "src/catalogue/customers/dto/create-customer.dto";
import { CreatePersonalReferenceDto } from "src/catalogue/personal-reference/dto/create-personal-reference.dto";

export class CreateCreditDto {

    @IsNumber()
    @IsPositive()
    requested_money:number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    approved_money?:number;

    @IsString()
    date_of_issue:string;

    @IsString()
    @IsOptional()
    disbursement_date?:string;

    @IsInt()
    @IsPositive()
    period:number;

    @IsNumber()
    @IsPositive()
    interest_rate:number;

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

    @IsOptional({each:true})
    aval?: CreateAvalDto[]

    @IsOptional({each:true})
    personalReference?: CreatePersonalReferenceDto[]

    @IsOptional()
    business?: CreateBusinessDto

    @IsOptional()
    customer?: CreateCustomerDto

    @IsNumber()
    fk_employee_cobrador: number

    @IsNumber()
    fk_employee_analista: number

    @IsNumber()
    fk_financial_interest: number

    @IsNumber()
    fk_period_type: number
}
