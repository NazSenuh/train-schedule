import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ScheduleModule} from './schedule/schedule.module'
import {Schedule} from './entities/schedule.entity'

@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: '',
      entities: [Schedule],
      synchronize: true
    }),
    ScheduleModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
