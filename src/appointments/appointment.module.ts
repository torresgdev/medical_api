import { Module } from "@nestjs/common";
import { AppointmentsService } from "./services/appointments.service";
import { AppointmentController } from "./controllers/appointments.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Appointment } from "./entities/appointment.entity";
import { User } from "src/users/entities/user.entity";
import { Specialty } from "src/specialties/entities/specialty.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Appointment, User, Specialty])],
    controllers: [AppointmentController],
    providers: [AppointmentsService],
})

export class AppointmentModule {}