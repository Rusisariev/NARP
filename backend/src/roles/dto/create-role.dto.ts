import {IsNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {

    @ApiProperty({example: "USER", description: "Роль пользователя"})
    @IsString({message: "Должно быть строкой"})
    readonly value: string

    @ApiProperty({example: "Пользователь", description: "Описание роли пользователя"})
    @IsNumber({}, {message: "Должно быть числом"})
    readonly description: string
}