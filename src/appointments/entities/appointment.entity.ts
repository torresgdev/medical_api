import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";
import { Specialty } from "src/specialties/entities/specialty.entity";
import { Transform } from "class-transformer";

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

    @Column()
    @Transform(({ value }) => value.toLocaleString('pt-BR'), { toPlainOnly: true })
  date: Date;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;
}