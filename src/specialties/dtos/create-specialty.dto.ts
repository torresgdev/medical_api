import { IsString, IsOptional, isString } from "class-validator";

export class CreateSpecialtyDto {
    @IsString()
    name:string;

    @IsString()
    @IsOptional()
    description?: string;
}