export async function deletePatient(name: string){
    let url = 'http://localhost:8080/patient/delete/' + name;
    console.log(url);
    try{
        const response = await fetch(url, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }   
        }); //must be http request of delete method
        console.log(response);
        const data = await response.json();
        console.log(data);
    
    }catch(e){
        console.log(e);
    }
}
