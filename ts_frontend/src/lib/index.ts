//use sveltekit (framework) when this way dont work properly
//try out axios

//use sveltekit (framework) when this way dont work properly
//try out axios
import type { Patient, Illness } from "./models";

type GetPatientReponse = {
    data: Patient[];
};

// async function load_patient_list(){
//     var patients  = await getPatients();
    
//     if (typeof patients === "string"){
//         console.log(patients);
//     }else{
//         var div = document.getElementById("list");
//         var ul = document.createElement("ul");
//         for (var i = 0; i < patients.data.length; i++){
//             var li = document.createElement('li');
//             li.innerText = patients.data[i].name;
//             ul.append(li);
//         }
//         //do the code in the then function
//         // var li = document.createElement('li');
//         // li.innerText = "lol";
//         // ul.append(li);     
//         div?.append(ul);
//     }
// }    

export async function getPatients(){
    try{
        const response = await fetch('http://localhost:8080/patient/get_all/', {
            method: 'GET',
            mode: 'cors',
            headers: {
                Accept: 'application/json',
                ContentType: 'application/json;charset=utf-8'
            }
        });

        if (!response.ok){
            throw new Error('Error! status: ${response.status}');
        }
        
        const result: Patient[] = await response.json();
        console.log(result);
        return result;
    }catch (err){
        if (err instanceof Error){
            return err.message;
        }else{
            return 'An unknown error occurred';
        }
    }
}