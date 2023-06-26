import { IsArray, IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateHousingTypeDto {
    @IsString()
    name: string;

    @IsBoolean()
    @IsOptional()
    is_active?: boolean;
}
