export const load = async ({fetch}) => {
    const pat_res = await fetch("http://localhost:8080/patient/get_all/");  
    console.log(pat_res);
    const patients = await pat_res.json();

    const ill_res = await fetch("http://localhost:8080/illness/get_all/"); 
    console.log(ill_res);
    const illnesses = await ill_res.json();

    return{
        illnesses: illnesses,
        patients: patients
    };
};