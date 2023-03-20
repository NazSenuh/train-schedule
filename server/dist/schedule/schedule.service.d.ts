import { Schedule } from "../entities/schedule.entity";
import { CreateScheduleDto, EOrder, ModifyScheduleDTO } from './dto/create-schedule.dto';
export declare class ScheduleService {
    createSchedule(dto: CreateScheduleDto): Promise<string>;
    findAllSchedules(): Promise<Schedule[]>;
    findByFilters(title: string, orderBy: EOrder): Promise<Schedule[]>;
    findOne(id: string): Promise<Schedule>;
    modify(id: string, data: ModifyScheduleDTO): Promise<string>;
    delete(id: string): Promise<void>;
}
