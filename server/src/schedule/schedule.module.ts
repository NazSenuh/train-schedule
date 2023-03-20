import { Module } from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ScheduleController} from "./schedule.controller";
import {Schedule} from "../entities/schedule.entity";
import {ScheduleService} from "./schedule.service";

@Module({
    controllers: [ScheduleController],
    providers:[ScheduleService],
    imports:[
        TypeOrmModule.forFeature([Schedule]),
    ],
    exports:[]
})
export class ScheduleModule {}