import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: "example@example.com", description: "Почта пользователя"})
    @IsString({message: "Должно быть строкой"})
    @IsEmail({}, {message: "Некоректный email"})
    readonly email: string

    @ApiProperty({example: "********", description: "Пароль пользователя"})
    @IsString({message: "Должно быть строкой"})
    @Length(6, 16, {message: "не меньше 6 и не больше 16 символов"})
    readonly password: string
}