"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleService = void 0;
const common_1 = require("@nestjs/common");
const schedule_entity_1 = require("../entities/schedule.entity");
const typeorm_1 = require("typeorm");
let ScheduleService = class ScheduleService {
    async createSchedule(dto) {
        const data = schedule_entity_1.Schedule.create(dto);
        await schedule_entity_1.Schedule.save(data);
        return 'schedule was created';
    }
    async findAllSchedules() {
        return await schedule_entity_1.Schedule.find();
    }
    async findByFilters(title, orderBy) {
        return await schedule_entity_1.Schedule.find({ where: { title: (0, typeorm_1.ILike)(`%${title}%`) }, order: { [orderBy]: 'DESC' } });
    }
    async findOne(id) {
        return await schedule_entity_1.Schedule.findOneBy({ id });
    }
    async modify(id, data) {
        const train = await this.findOne(id);
        Object.assign(train, data);
        await schedule_entity_1.Schedule.save(train);
        return 'schedule was modified!';
    }
    async delete(id) {
        await schedule_entity_1.Schedule.delete(id);
    }
};
ScheduleService = __decorate([
    (0, common_1.Injectable)()
], ScheduleService);
exports.ScheduleService = ScheduleService;
//# sourceMappingURL=schedule.service.js.map