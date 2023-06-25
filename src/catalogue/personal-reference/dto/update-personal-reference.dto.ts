import {IsArray, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class UpdatePersonalReferenceDto {
    
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
    
    @IsString()
    @IsOptional()
    relationship?: string;

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
