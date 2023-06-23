import { IsBoolean, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class UpdateBusinessDto {
    @IsNumber()
    @IsOptional()
    @IsPositive()
    id?: number;

    @IsString()
    @IsOptional()
    business_description?:string;

    @IsString()
    @IsOptional()
    address?:string;

    @IsString()
    @IsOptional()
    address_reference?:string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    daily_gain?:number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    maximum_daily_gain?:number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    minimum_daily_gain?:number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    inventory_value?:number;

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
    @IsOptional()
    user_create?:string;

    @IsString()
    user_update:string;

    @IsString()
    @IsOptional()
    created_at?:string;

    @IsString()
    updated_at:string;

}
