import { IsString } from "class-validator";

export class CreatePeriodTypeDto {
    @IsString()
    name:string;
}
