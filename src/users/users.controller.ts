import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CreateUsersDto } from './dto/users-create.dto';
import { UpdateUsersDto } from './dto/users-update.dto';
import { UsersService } from './users.service';
import * as uuid from 'uuid';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }

  //   getAll(): string {
  //     return 'GetAll';
  //   }

  //   @Get(':id')
  //   getOne(@Param() params) {
  //     return 'getOne' + params.id;
  //   }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<User> {
    return this.usersService.getOne(id);
  }
  //   getOne(@Param('id') id: string): string {
  //     return 'getOne' + id;
  //   }

  @Post()
  create(@Body() createUsersDto: CreateUsersDto): Promise<User> {
    console.log(createUsersDto);
    return this.usersService.create(createUsersDto);
  }
  //   create(@Body() createUsersDto: CreateUsersDto): string {
  //     return `id: ${createUsersDto.id} name:${createUsersDto.name} login:${createUsersDto.login}`;
  //   }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Remove' + id;
  }

  @Put(':id')
  update(@Body() updateUsersDto: UpdateUsersDto) {
    return `updata + ${JSON.stringify(updateUsersDto)}`;
  }
}
