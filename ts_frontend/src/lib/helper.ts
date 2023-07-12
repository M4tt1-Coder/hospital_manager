import { goto } from "$app/navigation";

export async function deletePatient(name: string){
    let url = 'http://localhost:8080/patient/delete/' + name;
    console.log(url);
    try{
        const response = await fetch(url); //must be http request of delete method
        //depends on the browser should go with delete method 
        //http request with different method: https://bobbyhadz.com/blog/typescript-http-request#making-http-delete-requests-in-typescript
        console.log(response);
        const data = await response.json();
        console.log(data);
        goto("home");
    }catch(e){
        console.log(e);
    }
}

export async function createPatient(name: string, age: number, roomnumber: number, illness: string){
    try{
        //ask why I can't add additional headers to the request? -> Liam
        const response = await fetch('http://localhost:8080/patient/create/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                age: age,
                roomnumber: roomnumber,//look at the body create by this -> console.log
                illness: illness
            })//why is the age and roomnumber equal to 0?
        });
        console.log(response.body);
        if(!response.ok){
            throw new Error('Error! status code:'+ response.status);
        }

        const patient = await response.json();
        console.log(patient);
        return patient;
    }catch(e){
        console.log(e);
    }
}
