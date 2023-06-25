import { IsArray, IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateFinancialInterestRateDto {
    @IsString()
    name:string;

    @IsBoolean()
    @IsOptional()
    is_active?: boolean;

    @IsString({each:true})
    @IsArray()
    user_create:string[];

    @IsString({each:true})
    @IsArray()
    @IsOptional()
    user_update?:string[];

    @IsString()
    created_at:string;

    @IsString()
    @IsOptional()
    updated_at?:string;
}
