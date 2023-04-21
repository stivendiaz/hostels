import { AmenityModel } from 'src/amenity/domain/model/amenity.model';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
} from 'typeorm';
import { Property } from 'src/property/infrastructure/entity/property.entity';

@Entity()
export class Amenity implements AmenityModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false })
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToMany(() => Property, (property) => property.amenities)
    properties: Property[];
}
