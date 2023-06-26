import { IsArray, IsBoolean, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateEmployeeDto {

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
}
