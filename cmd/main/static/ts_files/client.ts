//group of model interfaces

// class Patient{
//     Name?: string;
//     Age: number;
//     Roomnumber: number;
//     Illness?: string;
// }

interface Patient{
    Name: string;
    Age: number;
    Roomnumber: number;
    Illness: string;
}

//load (ul)-list of all patients
//-> https://youtu.be/X-mUYxLjqLY ... video create unordered list

export class ListTemplate{
    constructor(private container: HTMLUListElement){}
    
    render(patients: Patient[]){
        for(let i = 0, len = patients.length; i < len; i++){
            //create a unordered list of patients
            const li = document.createElement("li");

            //create paragraph element
            const pa = document.createElement("p");

            pa.innerText = patients[i].Name;
            li.append(pa);

            this.container.append(li);
        }
    }
}