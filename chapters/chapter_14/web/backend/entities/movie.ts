import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { MovieInterface } from "../../universal/entities/movie";
import { Actor } from "./actor";

@Entity()
export class Movie implements MovieInterface {
    @PrimaryGeneratedColumn()
    public id!: number;
    @Column()
    public title!: string;
    @Column()
    public year!: number;
    @JoinColumn()
    @ManyToMany((type) => Actor)
    public actors!: Actor[];
}
