import { IsBoolean, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateBusinessDto {

    @IsString()
    business_description:string;

    @IsString()
    address:string;

    @IsString()
    @IsOptional()
    address_reference?:string;

    @IsNumber()
    @IsPositive()
    daily_gain:number;

    @IsNumber()
    @IsPositive()
    maximum_daily_gain:number;

    @IsNumber()
    @IsPositive()
    minimum_daily_gain:number;

    @IsNumber()
    @IsPositive()
    inventory_value:number;

    @IsBoolean()
    @IsOptional()
    have_property_documents?:boolean;

    @IsBoolean()
    @IsOptional()
    have_vouchers?:boolean;

    @IsString()
    @IsOptional()
    observation?:string;

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
