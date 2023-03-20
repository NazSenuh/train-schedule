import { Injectable } from '@nestjs/common';

import {Schedule} from "../entities/schedule.entity";
import {CreateScheduleDto, EOrder, ModifyScheduleDTO} from './dto/create-schedule.dto'
import {ILike} from "typeorm";


@Injectable()
export class ScheduleService {
    async createSchedule(dto: CreateScheduleDto): Promise<string>{
        const data = Schedule.create<Schedule>(dto);
        await Schedule.save(data)

        return 'schedule was created'
    }

    async findAllSchedules(): Promise<Schedule[]>{
        return await Schedule.find();
    }

    async findByFilters(title: string, orderBy: EOrder): Promise<Schedule[]> {
        return await Schedule.find({where: {title: ILike(`%${title}%`)},  order: {[orderBy]: 'DESC'}})
    }

    async findOne(id:string): Promise<Schedule>{
        return await Schedule.findOneBy({ id });
    }

    async modify(id: string, data: ModifyScheduleDTO): Promise<string> {
        const train = await this.findOne(id)

        Object.assign(train, data)
        await Schedule.save(train)
        return  'schedule was modified!'
    }

    async delete(id:string): Promise<void>{
        await Schedule.delete(id)
    }
}