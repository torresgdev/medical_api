import { Controller, Get, Post, Body, Put, Delete, Param } from "@nestjs/common";
import { SpecialtiesService } from "../services/specialties.service";
import { CreateSpecialtyDto } from "../dtos/create-specialty.dto";

@Controller('specialties')
export class SpecialtiesController {
    constructor(private readonly specialtiesService: SpecialtiesService) {}

    @Post()
    create(@Body() createSPecialtyDto : CreateSpecialtyDto) {
        return this.specialtiesService.create(createSPecialtyDto)
    }

    @Get()
    findAll() {
        return this.specialtiesService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.specialtiesService.findOne(+id)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateSpecialtyDto: CreateSpecialtyDto) {
        return this.specialtiesService.update(+id, updateSpecialtyDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.specialtiesService.remove(+id)
    }
    
    
}
