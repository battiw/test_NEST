import { Injectable, ParseUUIDPipe } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateBoardDto } from './dto/board-create.dto';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { Repository } from 'typeorm';
import { UpdateBoardDto } from './dto/board-update.dto';
import { hashPassword } from '../../hashHelper/chekHash';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board) private boardRepository: Repository<Board>,
  ) {}

  async getAll(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  async getOne(id: string): Promise<Board> {
    return this.boardRepository.findOne(id);
  }

  async create(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.save(createBoardDto);
    // return this.usersRepository.save({...createUsersDto, id: uuid()});
    // return newUser.save();
    // return this.users.push({
    //   ...createUsersDto,
    //   id: uuid(),
    // });
  }

  async remove(id: string): Promise<void> {
    this.boardRepository.delete(id);
  }

  async update(id: string, updateBoardDto: UpdateBoardDto) {
    return this.boardRepository.update(id, updateBoardDto);
  }
}
