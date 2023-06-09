import {
    CreatePropertyDto,
    UpdatePropertyDto,
} from 'src/property/infrastructure/dto/property.dto';
import { PropertyModel } from 'src/property/domain/model/property.model';
import { Property } from '../entity/property.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyMapper {
    toEntity(property: CreatePropertyDto | UpdatePropertyDto): Property {
        const propertyEntity = new Property();
        propertyEntity.name = property.name;
        propertyEntity.email = property.email;
        propertyEntity.phone = property.phone;
        propertyEntity.city = property.city;
        propertyEntity.address = property.address;
        propertyEntity.country = property.country;
        propertyEntity.zipcode = property.zipcode;
        propertyEntity.typeId = property.typeId;
        propertyEntity.amenities = property.amenities;
        propertyEntity.image = property.image;
        propertyEntity.description = property.description;
        propertyEntity.rate = property.rate;
        propertyEntity.availableRooms = property.availableRooms;
        propertyEntity.price = property.price;
        propertyEntity.adminId = property.adminId;
        return propertyEntity;
    }

    toEntityWithContext(
        propertyEntity: Property,
        propertyDto: CreatePropertyDto | UpdatePropertyDto,
    ): Property {
        propertyEntity.name = propertyDto.name;
        propertyEntity.email = propertyDto.email;
        propertyEntity.phone = propertyDto.phone;
        propertyEntity.city = propertyDto.city;
        propertyEntity.address = propertyDto.address;
        propertyEntity.country = propertyDto.country;
        propertyEntity.zipcode = propertyDto.zipcode;
        propertyEntity.typeId = propertyDto.typeId;
        propertyEntity.amenities = propertyDto.amenities;
        propertyEntity.image = propertyDto.image;
        propertyEntity.description = propertyDto.description;
        propertyEntity.rate = propertyDto.rate;
        propertyEntity.availableRooms = propertyDto.availableRooms;
        propertyEntity.price = propertyDto.price;
        propertyEntity.adminId = propertyDto.adminId;
        return propertyEntity;
    }

    toDomain(property: Property): PropertyModel {
        const propertyDomain = new PropertyModel();
        propertyDomain.id = property.id;
        propertyDomain.name = property.name;
        propertyDomain.email = property.email;
        propertyDomain.phone = property.phone;
        propertyDomain.city = property.city;
        propertyDomain.address = property.address;
        propertyDomain.country = property.country;
        propertyDomain.zipcode = property.zipcode;
        propertyDomain.typeId = property.typeId;
        propertyDomain.amenities = property.amenities;
        propertyDomain.image = property.image;
        propertyDomain.description = property.description;
        propertyDomain.rate = property.rate;
        propertyDomain.availableRooms = property.availableRooms;
        propertyDomain.price = property.price;
        propertyDomain.adminId = property.adminId;
        return propertyDomain;
    }
}
