import { Body, Param, Put, Get, Post, Delete, Controller } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { CreateUserDto } from "../dtos/create-user.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";


@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService){}

    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.service.create(dto)
    }

    @Get()
    findAll() {
        return this.service.findAll()
    }

    @Get(':id') 
    findOne(@Param('id') id: string) {
        return this.service.findOne(+id)
    }

    @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(+id)
  }
}