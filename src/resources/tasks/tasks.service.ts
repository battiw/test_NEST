import { Injectable, ParseUUIDPipe } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateTasksDto } from './dto/tasks-create.dto';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Tasks } from './tasks.entity';
import { Repository } from 'typeorm';
import { UpdateTasksDto } from './dto/tasks-update.dto';
import { hashPassword } from '../../hashHelper/chekHash';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks) private tasksRepository: Repository<Tasks>,
  ) {}

  async getAll(): Promise<Tasks[]> {
    return this.tasksRepository.find();
  }

  async getOne(id: string): Promise<Tasks> {
    return this.tasksRepository.findOne(id);
  }

  async create(createTasksDto: CreateTasksDto): Promise<Tasks> {
    return this.tasksRepository.save(createTasksDto);
    // return this.usersRepository.save({...createUsersDto, id: uuid()});
    // return newUser.save();
    // return this.users.push({
    //   ...createUsersDto,
    //   id: uuid(),
    // });
  }

  async remove(id: string): Promise<void> {
    this.tasksRepository.delete(id);
  }

  async update(id: string, updateTasksDto: UpdateTasksDto) {
    return this.tasksRepository.update(id, updateTasksDto);
  }
}
