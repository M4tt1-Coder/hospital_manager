export const load = async ({fetch}) => {
    //get 
    const ill_all_res = fetch('http://localhost:8080/illness/get_all/');
    console.log(ill_all_res);
    const illnesses = (await ill_all_res).json();
    console.log(illnesses);

    return{
        illnesses: illnesses,

    };
}


