import {IsArray, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class UpdateAvalDto {
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
    email?: string;

    @IsString()
    @IsOptional()
    address?: string;
}
