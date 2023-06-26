import { IsArray, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreatePersonalReferenceDto {

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
    relationship: string;

}
