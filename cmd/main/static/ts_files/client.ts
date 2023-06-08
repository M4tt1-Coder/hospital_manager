//import mysql from 'mysql';
import {pool} from './database'
//group of model interfaces

interface Patient{
    Name: string;
    Age: number;
    Roomnumber: number;
    Illness: string;
}

//load (ul)-list of all patients
//-> https://youtu.be/X-mUYxLjqLY ... video create unordered list
//https://youtu.be/HNV28WcHLns
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

function load_patient_list(){
    //load patients
    //const patients = Patient[];
    //get html element
    var div = document.getElementById("list");

    var ul = document.createElement("ul");
 
    // for (let i = 0; i < load_patient_list.length; i++){
    //     const li = document.createElement("li");

    //     li.innerText = patients[i].Name;

    //     ul.append(li);
    // }   
    
    //testing _______
    var li = document.createElement("li");
    var text = "text";
    li.append(text);

    ul.append(li);
    //________
    div?.append(ul);
}