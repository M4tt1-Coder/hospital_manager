import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class EPatient{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "datetime2"})
    created_at: string;
    
    @Column({type: "datetime2"})
    updated_at: string;

    @Column({type: "datetime2"})
    deleted_at: string;

    @Column({type: "longtext"})
    name: string;

    @Column({type: "bigint"})
    age: number;

    @Column({type: "bigint"})
    roomnumber: number;

    @Column({type: "longtext"})
    illness: string;
}

@Entity()
export class EIllness{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    created_at: Date;
    
    @Column()
    updated_at: Date;

    @Column()
    deleted_at: Date;

    @Column()
    name: string;

    @Column()
    kind: string;

    @Column()
    can_be_healed: boolean;
}