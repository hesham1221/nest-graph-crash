import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { PetsResolver } from './pets.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Pet } from './pet.model';

@Module({
  imports :[SequelizeModule.forFeature([Pet])],
  providers: [PetsService , PetsResolver],
  controllers: [PetsController]
})
export class PetsModule {}
