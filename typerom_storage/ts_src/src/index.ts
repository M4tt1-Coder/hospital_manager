import { AppDataSource } from "./data-source"
import {EPatient, EIllness} from "./entity/models"


AppDataSource.initialize().then(async () => {

    // async function All_Patients(): Patient[]{
    //     //load all patients in database
    //     var patients = await AppDataSource.manager.find(patients);
    //     var output = [];
    //     for(var i = 0; i < patients.length; i++){
    //         var p = Patient{Name: patients[i].name, Age: patients[i].Age, Roomnumber: patients[i].Roomnumber, }
    //     }    
    // }

}).catch(error => console.log(error))

//can call function in html file
//need to get data right from the database to not block 
const patient_repository = AppDataSource.getRepository(EPatient);

async function load_patient_list(){
    //check to get the data from mysql database right
    var patients = await patient_repository.query(`
    SELECT * 
    FROM patients`);
    //var patients = patient_repository.createQueryBuilder('patient').select(); 
    //get html div element
    var div = document.getElementById("list");
    var ul = document.createElement("ul");
    for (var i = 0; i < patients.length; i++){
        var li = document.createElement('li');
        li.innerText = patients[i].name;
        ul.append(li);
    }

    var li = document.createElement('li');
    li.innerText = "lol";
    ul.append(li);     

    div?.append(ul);
}
