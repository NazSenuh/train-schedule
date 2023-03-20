import {HttpService} from "./http.service";
import {EOrder, ICreateSchedule, IModifySchedule, ISchedule} from "../types/schedule.types";

export class ScheduleService {
    constructor(private httpService: HttpService) {
    }

    async getAllTrains(): Promise<ISchedule[]> {
        return await this.httpService.get<ISchedule[]>('schedule/all')
    }

    async getByTitle(title: string, orderBy: EOrder): Promise<ISchedule[]> {
        return await this.httpService.get<ISchedule[]>(`schedule/search?title=${title}&name=${orderBy}`)
    }

    async getOne(id: string): Promise<ISchedule> {
        return await this.httpService.get<ISchedule>(`schedule/${id}`)
    }

    async createNewSchedule(data: ICreateSchedule): Promise<string> {
        return await this.httpService.post<string, ICreateSchedule>('schedule/create', data)
    }

    async modify(id: string, data: IModifySchedule): Promise<string> {
        return await this.httpService.put(`schedule/${id}`, data)
    }

    async delete(id: string): Promise<void> {
        return await this.httpService.delete(`schedule/${id}`)
    }
}

const scheduleService = new ScheduleService(new HttpService())
export default scheduleService