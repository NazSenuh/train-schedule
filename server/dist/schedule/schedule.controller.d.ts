import { ScheduleService } from './schedule.service';
import { CreateScheduleDto, EOrder, ModifyScheduleDTO } from "./dto/create-schedule.dto";
export declare class ScheduleController {
    private scheduleService;
    constructor(scheduleService: ScheduleService);
    create(scheduleDto: CreateScheduleDto): Promise<string>;
    getAll(): Promise<import("../entities/schedule.entity").Schedule[]>;
    getByTitle(title: string, orderName: EOrder): Promise<import("../entities/schedule.entity").Schedule[]>;
    getOne(id: string): Promise<import("../entities/schedule.entity").Schedule>;
    modify(id: string, data: ModifyScheduleDTO): Promise<string>;
    remove(id: string): Promise<void>;
}
