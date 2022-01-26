import { Injectable, ParseUUIDPipe } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUsersDto } from './dto/users-create.dto';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async getOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  create(createUsersDto: CreateUsersDto): Promise<User> {
    return this.usersRepository.save(createUsersDto);
    // return this.usersRepository.save({...createUsersDto, id: uuid()});
    // return newUser.save();
    // return this.users.push({
    //   ...createUsersDto,
    //   id: uuid(),
    // });
  }
}
