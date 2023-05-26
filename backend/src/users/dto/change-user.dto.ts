import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString, Length} from "class-validator";

export class ChangeUserDto {
    @ApiProperty({example: "1", description: "Идентификатор пользователя"})
    @IsNumber({}, {message: "Должно быть числом"})
    id: number

    @ApiProperty({example: "********", description: "Пароль пользователя"})
    @IsString({message: "Должно быть строкой"})
    @Length(6, 16, {message: "не меньше 6 и не больше 16 символов"})
    readonly password: string

    @ApiProperty({example: "null", description: "Аватарка пользователя"})
    @IsString({message: "Должно быть строкой"})
    readonly image: string

    @ApiProperty({example: "Владимер Владимерович", description: "Имя пользователя"})
    @IsString({message: "Должно быть строкой"})
    readonly userName: string
}