export const load = async ({fetch}) => {
    const response = await fetch('http://localhost:8080/illness/get_all/');
    console.log(response);
    const illnesses = await response.json();
    console.log(illnesses);
    return{
        illnesses: illnesses,
    };   
}