import { Injectable, Scope } from '@nestjs/common';
import { CreatePropertyDto } from 'src/property/infrastructure/dto/create-property.dto';
import { UpdatePropertyDto } from 'src/property/infrastructure/dto/update-property.dto';
import { PropertyRepositoryInterface } from 'src/property/domain/repository/property.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from '../entity/property.entity';
import { PropertyMapper } from '../utils/property.mapper';

@Injectable({ scope: Scope.REQUEST })
export class PropertyRepository implements PropertyRepositoryInterface {
    private readonly propertyMapper: PropertyMapper;

    constructor(
        @InjectRepository(Property)
        private readonly propertyRepository: Repository<Property>,
    ) {
        this.propertyMapper = new PropertyMapper();
    }

    async create(property: CreatePropertyDto): Promise<Property> {
        const newProperty = this.propertyMapper.toEntity(property);
        return await this.propertyRepository.save(newProperty);
    }

    async update(id: number, property: UpdatePropertyDto): Promise<Property> {
        const currentProperty = await this.propertyRepository.findOneBy({ id });
        const updatedProperty = this.propertyMapper.toEntityWithContext(
            currentProperty,
            property,
        );
        return await this.propertyRepository.save(updatedProperty);
    }

    async delete(id: number): Promise<void> {
        await this.propertyRepository.delete(id);
    }

    async findOne(id: number): Promise<Property> {
        return await this.propertyRepository.findOneBy({ id });
    }
}
