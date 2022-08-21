import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './pet.model';
import { PetsService } from './pets.service';

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}
  @Query(() => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  @Mutation(() => Pet)
  createPet(@Args('createPetInput') createPetInput : CreatePetInput):Promise<Pet>{
    return this.petsService.createPet(createPetInput)
  }
}
