import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { CreateUserDto } from "../dtos/create-user.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>
    ) {}

    create(data: CreateUserDto) {
        const user = this.userRepo.create(data)
        return this.userRepo.save(user)
    }

    findAll() {
        return this.userRepo.find()
    }

    findOne(id:number) {
        return this.userRepo.findOne({
            where: {id}
        })
    }

    update(id:number, data:UpdateUserDto) {
        return this.userRepo.update(id,data)
    }

    delete(id:number) {
        return this.userRepo.delete(id)
    }
}