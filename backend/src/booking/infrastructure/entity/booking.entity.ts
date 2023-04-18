import { BookingModel } from 'src/booking/domain/model/booking.model';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm';
import { BookingStatus } from './booking-status.entity';

@Entity()
export class Booking implements BookingModel {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    startDate: Date;

    @UpdateDateColumn()
    endDate: Date;

    @Column({ type: 'int' })
    statusId: number;

    @ManyToOne(() => BookingStatus, (status) => status.bookings)
    status: BookingStatus;

    @Column({ type: 'int', nullable: false })
    guests: number;
}
