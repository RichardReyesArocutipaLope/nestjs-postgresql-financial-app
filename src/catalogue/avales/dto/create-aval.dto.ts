import {IsArray, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateAvalDto {

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
    @IsOptional()
    email: string;

    @IsString()
    address: string;
}
