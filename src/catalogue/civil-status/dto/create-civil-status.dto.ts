import { IsString } from "class-validator";


export class CreateCivilStatusDto {
    @IsString()
    name:string;
}
