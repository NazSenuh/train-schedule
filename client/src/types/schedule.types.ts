export interface ICreateSchedule {
    title: string;
    description: string;
    price:number;
}

export interface ISchedule extends ICreateSchedule {
    id: string;
}

export enum EQueryKeys {
    ALL_SCHEDULE = 'all-schedule',
    ONE_SCHEDULE = 'one-schedule',
}
export type ID = {id:string}

export type IModifySchedule = Partial<ICreateSchedule>

export type IMutate = {id: string, data: IModifySchedule}

export enum EOrder {
    PRICE = 'price',
    DESCRIPTION = 'description'
}


