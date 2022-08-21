import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Model, Table } from 'sequelize-typescript';


@Table
@ObjectType()
export class Pet extends Model{
    @Column
    @Field()
    name :string;
    @Column({allowNull : true})
    @Field({nullable : true})
    type?:string
}