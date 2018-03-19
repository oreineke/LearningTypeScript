import { ActorInterface } from "../../universal/entities/actor";
import { Movie } from "./movie";
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToMany } from "typeorm";

@Entity()
export class Actor implements ActorInterface {
    @PrimaryGeneratedColumn()
    public id!: number;
    @Column()
    public name!: string;
    @Column()
    public yearBorn!: number;
    @JoinColumn()
    @ManyToMany(type => Movie)
    public movies!: Movie[];
}
