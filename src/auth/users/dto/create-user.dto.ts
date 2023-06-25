import { IsArray, IsEmail, IsNumber, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MinLength(1)
    full_name: string;


    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    @IsNumber()
    fk_employee: number

    @IsNumber()
    fk_role: number

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
