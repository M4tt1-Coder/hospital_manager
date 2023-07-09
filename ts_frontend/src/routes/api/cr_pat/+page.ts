export const load = async ({fetch}) => {
    // try{
    //     const patients_res = await fetch('http://localhost:8080/patient/get_all/');
    //     console.log(patients_res.json());
    //     if(!response.ok){
    //         throw new Error(response.statusText);
    //     }

    //     const currencies = await patients_res.json();
    //     return {patients: currencies}
    // }catch(error){
    //     console.error(error);
    //     return {error: 'Unable to fetch currencies'};        
    // }
    const response = await fetch('http://localhost:8080/patient/get_all/').;
    const patients = await response.json();
    return{
        patients:patients
    };
}
