import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './resources/users/users.controller';
import { UsersModule } from './resources/users/users.module';
import { UsersService } from './resources/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from './resources/users/user.entity';
import { Tasks } from './resources/tasks/tasks.entity';
import { Board } from './resources/board/board.entity';
import { BoardModule } from './resources/board/board.module';
import { TasksModule } from './resources/tasks/tasks.module';

@Module({
  imports: [
    UsersModule,
    BoardModule,
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'qwer',
      database: 'postgres',
      entities: [User, Board, Tasks],
      synchronize: true,
      // autoLoadEntities: true,
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
