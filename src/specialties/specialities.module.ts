import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Specialty } from "./entities/specialty.entity";
import { SpecialtiesService } from "./services/specialties.service";
import { SpecialtiesController } from "./controllers/specialties.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Specialty])],
    controllers: [SpecialtiesController],
    providers: [SpecialtiesService],
})

export class SpecialtiesModule {}