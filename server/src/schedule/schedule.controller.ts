import {Body, Controller, Delete, Get, Param, Post, Put, Query} from "@nestjs/common";
import { ScheduleService } from './schedule.service'
import {CreateScheduleDto, EOrder, EOrderSort, ModifyScheduleDTO} from "./dto/create-schedule.dto";
import * as Path from "path";


@Controller('schedule')
export class ScheduleController {

    constructor( private scheduleService: ScheduleService ) {
    }

    @Post('create')
    async create(@Body() scheduleDto: CreateScheduleDto){
        return await this.scheduleService.createSchedule(scheduleDto);
    }

    @Get('all')
    async getAll(){
        return await this.scheduleService.findAllSchedules();
    }

    @Get('search?')
    async getByTitle(
        @Query('title') title: string,
        @Query('name') orderName: EOrder,
    ) {
        return await this.scheduleService.findByFilters(title, orderName);
    }

    @Get(':id')
    async getOne(@Param('id') id: string) {
        return await this.scheduleService.findOne(id)
    }

    @Put(':id')
    async modify(@Param('id') id:string, @Body() data:ModifyScheduleDTO){
        return await this.scheduleService.modify(id, data)
    }

    @Delete(':id')
    async remove(@Param('id') id:string){
        return await this.scheduleService.delete(id)
    }
}