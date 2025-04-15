import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";
import { Specialty } from "src/specialties/entities/specialty.entity";

@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    patient: User;

    @ManyToOne(() => User)
    doctor: User;

    @ManyToOne(()=> Specialty)
    specialty: Specialty;

    @Column({type: 'timestamp'})
    date: Date;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;
}