import {IsNumber, isNumber, IsString} from "class-validator";
import {Schedule} from "../../entities/schedule.entity";

export  class CreateScheduleDto{
    @IsString({message:'Only String'})
    title:string;

    @IsString({message:'Only String'})
    description:string

    @IsNumber()
    price:number
}

export type ModifyScheduleDTO = Partial<CreateScheduleDto>

export enum EOrder {
    PRICE = 'price',
    DESCRIPTION = 'description'
}

export enum EOrderSort {
    ASC = 'ASC',
    DESC = 'DESC'
}