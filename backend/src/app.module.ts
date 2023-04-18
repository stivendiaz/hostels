import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestController } from './guest/infrastructure/controller/guest.controller';
import { PropertyController } from './property/infrastructure/controller/property.controller';
import { PropertyTypeController } from './property/infrastructure/controller/property-type.controller';
import { RoomController } from './room/infrastructure/controller/room.controller';
import { BookingController } from './booking/infrastructure/controller/booking.controller';
import { BookingStatusController } from './booking/infrastructure/controller/booking-status.controller';

import { getEnvPath } from './shared/config/helpers';

import { TypeOrmConfigService } from './shared/infrastructure/typeorm/typeorm.service';
import { PropertyUsecaseModule } from './property/infrastructure/module/property.usecase.module';
import { GuestUsecaseModule } from './guest/infrastructure/module/guest.usecase.module';
import { RoomUseCaseModule } from './room/infrastructure/module/roomUseCaseModule';
import { BookingUsecaseModule } from './booking/infrastructure/module/booking.usecase.module';

const envFilePath: string = getEnvPath(`${__dirname}/shared/config/envs/`);

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath, isGlobal: true }),
        TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
        PropertyUsecaseModule.register(),
        GuestUsecaseModule.register(),
        RoomUseCaseModule.register(),
        BookingUsecaseModule.register(),
    ],
    controllers: [
        GuestController,
        PropertyController,
        PropertyTypeController,
        RoomController,
        BookingController,
        BookingStatusController,
    ],
    providers: [],
})
export class AppModule {}
