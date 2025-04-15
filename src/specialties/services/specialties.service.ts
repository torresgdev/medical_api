import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Specialty } from "../entities/specialty.entity";
import { CreateSpecialtyDto } from "../dtos/create-specialty.dto";

@Injectable()
export class SpecialtiesService {
  constructor(
    @InjectRepository(Specialty)
    private specialtyRepository: Repository<Specialty>,
  ) {}

  create(createSpecialtyDto: CreateSpecialtyDto) {
    const specialty = this.specialtyRepository.create(createSpecialtyDto)
    return this.specialtyRepository.save(specialty);
  }

  findAll() {
    return this.specialtyRepository.find()
  }

  findOne(id: number) {
    return this.specialtyRepository.findOne({
        where: {id}
    });
  }

  update(id: number, updateSpecialty: CreateSpecialtyDto) {
    return this.specialtyRepository.update(id, updateSpecialty)
  }

  remove(id: number) {
    return this.specialtyRepository.delete(id)
  }


}