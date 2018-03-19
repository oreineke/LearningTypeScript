import { MovieInterface } from "../../universal/entities/movie";
import { Actor } from "./actor";
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToMany } from "typeorm";

@Entity()
export class Movie implements MovieInterface {
    @PrimaryGeneratedColumn()
    public id!: number;
    @Column()
    public title!: string;
    @Column()
    public year!: number;
    @JoinColumn()
    @ManyToMany(type => Actor)
    public actors!: Actor[];
}
