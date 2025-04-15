import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export type UserRole = 'PATIENT' | 'DOCTOR';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string

    @Column({type: 'enum', enum:['PATIENT', 'DOCTOR']})
    role: UserRole;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}