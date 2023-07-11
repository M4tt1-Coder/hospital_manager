//import {handle} from '.../load/hooks';

export const load = async ({fetch}) => {
    

    const response = await fetch('http://localhost:8080/patient/get_all/');
    console.log(response);
    const patients = await response.json();
    console.log(patients);    
    
    return{
        patients:patients
    };
}

//how to use hooks.server.ts
//solve cors problem

//1.) try proxy server
//2.) ask liam for a short meeting
//3.) add cors header in golang backend
