import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/role.model";
import {UserRoles} from "../roles/user-roles.model";

interface UserCreationAttrs {
    email: string
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{

    @ApiProperty({example: "1", description: "Уникальный идентификатор"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: "example@example.com", description: "Почта пользователя"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @ApiProperty({example: "********", description: "Пароль пользователя"})
    @Column({type: DataType.STRING, allowNull: false})
    password: string

    @ApiProperty({example: "true", description: "Забанен пользователь или нет"})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean

    @ApiProperty({example: "null", description: "Описание бана"})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string

    @ApiProperty({example: "null", description: "Аватарка пользователя"})
    @Column({type: DataType.STRING, allowNull: true})
    image: string

    // @ApiProperty({example: "Владимер Владимерович", description: "Имя пользователя"})
    // @Column({type: DataType.STRING, defaultValue: ""})
    // userName: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}