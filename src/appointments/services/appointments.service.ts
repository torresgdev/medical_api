import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAppointmentDto } from "../dtos/create-appointment.dto";
import { UpdateAppointmentDto } from "../dtos/update-appointment.dto";
import { Appointment } from "../entities/appointment.entity";

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepo: Repository<Appointment>,
  ) {}

  async create(dto: CreateAppointmentDto) {
    const exists = await this.appointmentRepo.findOne({
        where: {
            doctor: {id: dto.doctorId},
            date: new Date(dto.date),
        },
    });

    if(exists){
        throw new BadRequestException('This user is already occupied for this doctor')
    }
    const appointment = this.appointmentRepo.create(dto);
    return this.appointmentRepo.save(appointment)
  }

  findAll() {
    return this.appointmentRepo.find({
        relations: ['patient', 'doctor', 'specialty'],
        order: {date: 'ASC'},
    });
  }

  findOne(id:number) {
    return this.appointmentRepo.findOne({
        where: {id},
        relations: ['patient', 'doctor', 'specialty'],
    });
  }

  async update(id: number, dto: UpdateAppointmentDto) {
    const appointment = await this.appointmentRepo.findOne({where:{id}});
    if (!appointment) {
        throw new NotFoundException('Appointment not found')
    }

    Object.assign(appointment, dto);
    return this.appointmentRepo.save(appointment)
  }

  async remove(id: number) {
    const result = await this.appointmentRepo.delete(id);
    if (result.affected === 0) {
        throw new NotFoundException('Appointment not found')
    }
}

}