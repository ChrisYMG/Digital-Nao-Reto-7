import { IsEmail, IsNotEmpty, IsString, MinLength, IsOptional } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: string;

    @IsString()
    @IsOptional()
    readonly phone?: string;
}
