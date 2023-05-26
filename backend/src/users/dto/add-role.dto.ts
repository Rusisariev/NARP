import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class AddRoleDto {

    @ApiProperty({example: "USER", description: "роль"})
    @IsString({message: "Должно быть строкой"})
    readonly value: string

    @ApiProperty({example: "1", description: "идентификатор пользователя"})
    @IsNumber({}, {message: "Должно быть числом"})
    readonly userId: number
}