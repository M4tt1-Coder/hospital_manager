export const load  = async ({fetch}) => {
    //get all patients 
    const pat_res = await fetch('http://localhost:8080/patient/get_all/');
    console.log(pat_res);
    const patients = await pat_res.json();
    console.log(patients);

    //get all illnesses
    const illness_res = await fetch('http://localhost:8080/illness/get_all/');
    console.log(illness_res);
    const illnesses = await illness_res.json();
    console.log(illnesses);

    return {
        patients,
        illnesses
    };
}