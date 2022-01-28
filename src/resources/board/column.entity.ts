import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  OneToMany,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Tasks } from '../tasks/tasks.entity';
// import { Column as BoardCol } from '../board/dto/column-create.dto';

@Entity()
export class Columns {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  order: number;
}
