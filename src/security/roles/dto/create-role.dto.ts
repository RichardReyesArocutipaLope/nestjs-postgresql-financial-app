import {IsArray, IsOptional, IsString } from "class-validator";

export class CreateRoleDto {
    @IsString()
    name:string;

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
