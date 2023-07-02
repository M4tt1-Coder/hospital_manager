// export class Patient{
//     name!: string;
//     age!: number;
//     roomnumber!: number;
//     illness!: string;
//     CreatedAt?: string;
//     DeletedAt?: string | null;
//     UpdatedAt?: string;
// }

export class Patient {
    ID!:         number;
    CreatedAt!:  Date;
    UpdatedAt!:  Date;
    DeletedAt!:  null | Date;
    name!:       string;
    age!:        number;
    roomnumber!: number;
    illness!:    string;
}

export class Illness{
    name!: string;
    kind!: string;
    can_be_healed!: boolean; 
}