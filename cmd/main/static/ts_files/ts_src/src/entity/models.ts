import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class EPatient{
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
    age: number;

    @Column()
    roomnumber: number;

    @Column()
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


