import { Controller, Body, Param, Post, Get, Put, Delete, ParseIntPipe } from "@nestjs/common";
import { AppointmentsService } from "../services/appointments.service";
import { CreateAppointmentDto } from "../dtos/create-appointment.dto";
import { UpdateAppointmentDto } from "../dtos/update-appointment.dto";

@Controller('appointment')
export class AppointmentController {
    constructor(private readonly service:AppointmentsService) {}

    @Post()
    create(@Body() dto: CreateAppointmentDto) {
        return this.service.create(dto)
    }

    @Get()
    findAll() {
        return this.service.findAll()
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id)
    }

    @Put(':id')
    update(@Body() dto: UpdateAppointmentDto, @Param('id', ParseIntPipe) id: number) {
        return this.service.update(id, dto)
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.service.remove(id)
    }
}