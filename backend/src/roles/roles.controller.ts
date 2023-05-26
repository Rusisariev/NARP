import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRoleDto} from "./dto/create-role.dto";
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@ApiTags("Роли")
@Controller('roles')
export class RolesController {

    constructor(private rolesService: RolesService) {}

    @ApiOperation({summary: "Создание роли"})
    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.rolesService.createRole(dto)
    }

    @ApiOperation({summary: "Получение роли по ключу"})
    @Get("/:value")
    getByValue(@Param("value") value: string) {
        return this.rolesService.getRoleByValue(value)
    }

    @ApiOperation({summary: "Получение ролей"})
    @UseGuards(JwtAuthGuard)
    @Get()
    getAllRole() {
        return this.rolesService.getAllRole()
    }

}
