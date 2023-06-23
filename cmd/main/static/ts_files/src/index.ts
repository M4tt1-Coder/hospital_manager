import { Patient, Illness } from "./models";

type GetPatientReponse = {
    data: Patient[];
};

function load_patient_list(){
    getPatients().then((data) => {
        var patients = data;

        if (typeof patients === "string"){
            console.log(patients);
        }else{
            var div = document.getElementById("list");
            var ul = document.createElement("ul");
            for (var i = 0; i < patients.data.length; i++){
                var li = document.createElement('li');
                li.innerText = patients.data[i].name;
                ul.append(li);
            }
            //do the code in the then function
            var li = document.createElement('li');
            li.innerText = "lol";
            ul.append(li);     

            div?.append(ul);
        }
    });
}

//json : http functions

async function getPatients(){
    try{
        const response = await fetch('http://localhost:8080/patient/get_all/', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            }
        });

        if (!response.ok){
            throw new Error('Error! status: ${response.status}');
        }

        const result = (await response.json()) as GetPatientReponse;

        return result;
    }catch (err){
        if (err instanceof Error){
            return err.message;
        }else{
            return 'An unknown error occurred';
        }
    }
}