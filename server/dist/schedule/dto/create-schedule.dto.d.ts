export declare class CreateScheduleDto {
    title: string;
    description: string;
    price: number;
}
export type ModifyScheduleDTO = Partial<CreateScheduleDto>;
export declare enum EOrder {
    PRICE = "price",
    DESCRIPTION = "description"
}
export declare enum EOrderSort {
    ASC = "ASC",
    DESC = "DESC"
}
