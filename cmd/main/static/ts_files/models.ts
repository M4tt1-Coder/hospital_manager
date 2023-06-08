import {RowDataPacket} from "mysql2"

export interface IPatient extends RowDataPacket {
    Name: string,
    Age: number,
    Roomnumber: number,
    Illness: string,
}

export interface IIllness extends RowDataPacket{
    Name: string,
    Kind: string,
    Can_be_healed: boolean
}