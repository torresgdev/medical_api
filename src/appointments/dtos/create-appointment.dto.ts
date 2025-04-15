import { IsDateString, IsIn, IsInt } from "class-validator";

export class CreateAppointmentDto {
    @IsInt()
    patientId: number;

    @IsInt()
    doctorId: number;

    @IsInt()
    specialtyId: number;

    @IsDateString()
    date: string;
}
