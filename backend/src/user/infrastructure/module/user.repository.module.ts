import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../repository/user.repository';
import { User } from '../entity/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserRepository],
    exports: [UserRepository],
})
export class UserRepositoryModule {}
