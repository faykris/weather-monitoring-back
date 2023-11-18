"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schedule_1 = require("@nestjs/schedule");
const app_gateway_1 = require("./app.gateway");
let AppService = class AppService {
    constructor(baseSensorModel, appGateway) {
        this.baseSensorModel = baseSensorModel;
        this.appGateway = appGateway;
    }
    getHello() {
        return 'Hello sensors!';
    }
    async findAll() {
        const sensors = await this.baseSensorModel.find();
        return sensors;
    }
    async addData(sensorId, dataEntry) {
        return this.baseSensorModel.findOneAndUpdate({ sensor_id: sensorId }, { $push: { data: dataEntry } }, { new: true });
    }
    async handleCron() {
        const currentTime = new Date().toISOString();
        const sensor1Id = 1;
        const sensor2Id = 2;
        const sensor3Id = 3;
        const newSensor1Record = {
            timestamp: currentTime,
            temperature: this.getRandomValue(25.5, 26.5),
            humidity: this.getRandomValue(60.0, 62.0)
        };
        const newSensor2Record = {
            timestamp: currentTime,
            pressure: this.getRandomValue(1013.0, 1013.9),
            wind_speed: this.getRandomValue(4.5, 5.5)
        };
        const newSensor3Record = {
            timestamp: currentTime,
            noise_level: this.getRandomValue(40.1, 43.1),
            air_quality: this.getRandomString(["Buena", "Moderada", "Mala"])
        };
        await this.addData(sensor1Id, newSensor1Record);
        await this.addData(sensor2Id, newSensor2Record);
        await this.addData(sensor3Id, newSensor3Record);
        console.log(`Cron job executed at ${currentTime}`);
        const updateMessage = 'El cron job se está ejecutando...';
        this.appGateway.handleCronJobUpdate(updateMessage);
    }
    getRandomValue(min, max) {
        return Math.random() * (max - min) + min;
    }
    getRandomString(values) {
        return values[Math.floor(Math.random() * values.length)];
    }
};
__decorate([
    (0, schedule_1.Cron)("0 */15 * * * *"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppService.prototype, "handleCron", null);
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('sensors')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        app_gateway_1.AppGateway])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map