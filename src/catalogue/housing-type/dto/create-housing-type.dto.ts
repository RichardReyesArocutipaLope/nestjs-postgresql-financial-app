import { IsString } from "class-validator";

export class CreateHousingTypeDto {
    @IsString()
    name:string;
}
