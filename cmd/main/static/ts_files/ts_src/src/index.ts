import { AppDataSource } from "./data-source"
import {Patient, Illness} from "./entity/models"

AppDataSource.initialize().then(async () => {

    function load_patient_list(){
        //load all patients in database

        //get html div element
        var div = document.getElementById("")
    }
}).catch(error => console.log(error))

// function load_patient_list(){
//     //load all patients in database

//     //get html div element
//     var div = document.getElementById("list");
// }
