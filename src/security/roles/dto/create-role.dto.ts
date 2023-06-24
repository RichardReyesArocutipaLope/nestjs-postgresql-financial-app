import {IsOptional, IsString } from "class-validator";

export class CreateRoleDto {
    @IsString()
    name:string;

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
