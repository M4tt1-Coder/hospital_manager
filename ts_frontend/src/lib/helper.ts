//import { goto, invalidate } from "$app/navigation";

function reloadPage(){
    window.location.reload();
}

export async function deleteIllness(name: string) {
    let url = 'http://localhost:8080/illness/delete/' + name;
    console.log(url);
    try{
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        const data = await response.json();
        console.log(data);

        reloadPage();

        //return data;
    }catch (err){
        console.log(err);
    } 

}

export async function deletePatient(name: string){
    let url = 'http://localhost:8080/patient/delete/' + name;
    console.log(url);
    try{
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }); //must be http request of delete method
        //depends on the browser should go with delete method 
        //http request with different method: https://bobbyhadz.com/blog/typescript-http-request#making-http-delete-requests-in-typescript
        console.log(response);
        const data = await response.json();
        console.log(data);
        
        //refresh after the patient was deleted
        reloadPage();
        
        //return data;
    }catch(e){
        console.log(e);
    }
}

export async function createIllness(name: string, kind: string, cbh: boolean){
    try{
        const fetch_body = '{"name": "' + name + '", "kind": "' + kind + '", "can_be_healed": ' + cbh + '}';
        console.log(fetch_body);
        const response = await fetch('http://localhost:8080/illness/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: fetch_body
        });

        console.log(response.body);
        if(!response.ok){
            throw new Error(response.statusText);
        }
        const illness = await response.json();
        console.log(illness);
        reloadPage();
        return illness;        
    }catch (err){
        console.log(err);
    }
}

export async function createPatient(name: string, age: number, roomnumber: number, illness: string){
    try{
        const fetch_body = '{"name": "' + name + '", "age":'+ age + ', "roomnumber":' + roomnumber + ', "illness": "' + illness + '"}';
        console.log(fetch_body);
        //ask why I can't add additional headers to the request? -> Liam
        const response = await fetch('http://localhost:8080/patient/create/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: fetch_body//why is the age and roomnumber equal to 0?
        });
        console.log(response.body);
        if(!response.ok){
            throw new Error('Error! status code:'+ response.status);
        }

        const patient = await response.json();
        console.log(patient);
        reloadPage();
        return patient;
    }catch(e){
        console.log(e);
    }
}

export async function UpdatePatient(name: string, age:  number, roomnumber: number,  illness: string){
    try{
        const fetch_body = '{"name": "'+ name+ '", "age": "'+ age + '", "roomnumber": "'+ roomnumber + '", "illness": "' + illness + '"}';
        console.log(fetch_body);
        const response = await fetch('http://localhost:8080/patient/update/',{
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body:fetch_body
        });
        console.log(response);
        if(!response.ok){
            throw new Error("Error! status code: " + response.status);
        }
        const patient = await response.json();
        console.log(patient);
        return patient;
    }catch (error){
        console.log(error);
        throw new Error("Error! status code: " + error);
    }
}