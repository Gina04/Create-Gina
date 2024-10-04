export const fetchMuebles= async()=>{
    const BASE_URL= 'https://jsonplaceholder.typicode.com/albums/1/photos';
    try{
        const response= await fetch(BASE_URL);
        const data = await response.json();

        return data;
    }catch(error){
        console.error('Error fetch data', error);

        throw error;
    }
}

export const fetchMueblesById= async(id)=>{
    try{
        const response = await fetch (`https://jsonplaceholder.typicode.com/albums/${id}/photos/`);
        const data = await response.json();
        return data[0];
    }catch(error){
        console.log('Error fetch data', error);
        throw error;
    }
}