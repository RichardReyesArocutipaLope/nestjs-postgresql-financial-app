import { IsInt, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateCreditDto {

    @IsNumber()
    @IsPositive()
    requested_money:number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    approved_money?:number;

    @IsString()
    date_of_issue:string;

    @IsString()
    @IsOptional()
    disbursement_date?:string;

    @IsInt()
    @IsPositive()
    period:number;

    @IsNumber()
    @IsPositive()
    interest_rate:number;

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
