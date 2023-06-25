import { IsArray, IsBoolean, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class UpdateCustomerDto {

    @IsNumber()
    @IsOptional()
    @IsPositive()
    id?: number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    dni?: number;

    @IsString()
    @IsOptional()
    first_name?: string;

    @IsString()
    @IsOptional()
    last_name?: string;

    @IsString()
    @IsOptional()
    phone?: string;

    @IsString()
    @IsOptional()
    phone2?: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    address?: string;

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
    @IsOptional()
    fk_civil_status?: number

    @IsNumber()
    @IsOptional()
    fk_housing_type?: number

    @IsString({each:true})
    @IsOptional()
    @IsArray()
    user_create:string[];

    @IsString({each:true})
    @IsArray()
    user_update?:string[];

    @IsString()
    @IsOptional()
    created_at?:string;

    @IsString()
    updated_at:string;
}
