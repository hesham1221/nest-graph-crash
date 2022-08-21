import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './pet.model';

@Injectable()
export class PetsService {
    constructor(@InjectModel(Pet) private petModel : typeof Pet){}
    async findAll():Promise<Pet[]>{  
        return await this.petModel.findAll();
    }
    async createPet(createPetInput : CreatePetInput) :Promise<Pet>{
        const newPet = await this.petModel.create(createPetInput);
        return newPet
    }
}
