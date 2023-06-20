import { IsBoolean, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { CreateBusinessDto } from "src/catalogue/business/dto/create-business.dto";
import { CreateCreditDto } from "src/credits/credit/dto/create-credit.dto";

export class CreateCustomerDto {

    @IsNumber()
    @IsPositive()
    dni: number;

    @IsString()
    first_name: string;

    @IsString()
    last_name: string;

    @IsString()
    phone: string;

    @IsString()
    phone2: string;

    @IsString()
    email: string;

    @IsString()
    address: string;

    @IsString()
    @IsOptional()
    address_reference?: string;

    @IsBoolean()
    @IsOptional()
    is_active?: boolean;

    @IsBoolean()
    @IsOptional()
    has_electricity_bill?: boolean;

    @IsBoolean()
    @IsOptional()
    is_over_21?: boolean;

    @IsBoolean()
    @IsOptional()
    have_valid_dni?: boolean;

    @IsBoolean()
    @IsOptional()
    have_property_documents?: boolean;

    @IsString()
    @IsOptional()
    observation?:string;

    @IsNumber()
    fk_civil_status: number

    @IsNumber()
    fk_housing_type: number

    @IsString()
    user_create:string;

    @IsString()
    @IsOptional()
    user_update?:string;

    @IsString()
    created_at:string;

    @IsString()
    @IsOptional()
    updated_at?:string;
}
