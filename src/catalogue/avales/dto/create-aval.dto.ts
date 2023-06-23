import {IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { CreateCreditDto } from "src/credits/credit/dto/create-credit.dto";

export class CreateAvalDto {

    @IsNumber()
    @IsOptional()
    @IsPositive()
    id: number;

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
    email: string;

    @IsString()
    address: string;


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
