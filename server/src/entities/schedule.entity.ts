import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Schedule extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({default:' '})
    title: string;

    @Column()
    description: string;

    @Column()
    price:number
}
