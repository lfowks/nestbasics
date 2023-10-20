import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('books')
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    author: string;
}
