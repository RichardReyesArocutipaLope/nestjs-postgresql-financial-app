import { IsBoolean, IsIn, IsInt, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class FilterCreditDto {


    @IsOptional()
    search_value?: string;

    @IsString()
    @IsOptional()
    state?: string;

    @IsString()
    @IsOptional()
    date_range_first?: string;

    @IsString()
    @IsOptional()
    date_range_last?: string;

    @IsNumber()
    @IsInt()
    @IsPositive()
    @IsOptional()
    money_range_first?: number;

    @IsNumber()
    @IsInt()
    @IsPositive()
    @IsOptional()
    money_range_last?: number;

    @IsNumber()
    @IsInt()
    @IsPositive()
    @IsOptional()
    id_analista?: number;

    @IsNumber()
    @IsInt()
    @IsPositive()
    @IsOptional()
    id_cobrador?: number;
}