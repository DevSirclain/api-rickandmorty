const API_URL = 'https://rickandmortyapi.com/api';
const API_KEY = '';

export const getPeliculasPopulares = async () => {


 try {
  //* alt + 96 
  const response = await fetch(`${API_URL}/popular?api_key=${API_KEY}`);
  if(!response.ok) {
    throw new Error(`Http error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
 } catch (error) {
   console.log('Error en la petición',  error);
   return null;
 }
};



export const buscarPeliculas = async (query) => {
  try {
    const response = await fetch();
  } catch (error) {
    
  }
}


export const getPersonajes = async () => {

    try {
        const response = await fetch(`${API_URL}/character`);
        if(response.status != "200") 
        {
          throw new Error(`Http error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);      
        return data;
       } catch (error) {
         console.log('Error en la petición',  error);
         return null;
       }
}


export const getOtherPage = async (page) => {

  try {
      const response = await fetch(`${page}`);
      if(response.status != "200") 
      {
        throw new Error(`Http error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);      
      return data;
     } catch (error) {
       console.log('Error en la petición',  error);
       return null;
     }
}



export const getDetallePersonaje = async (id) => {
    try {
        const response = await fetch(`${API_URL}/character/${id}`);
        if(response.status != "200") 
        {
          throw new Error(`Http error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);      
        return data;
       } catch (error) {
         console.log('Error en la petición',  error);
         return null;
       }
}


export const getEpisodios = async () => {

    try {
        const response = await fetch(`${API_URL}/episode`);
        if(response.status != "200") 
        {
          throw new Error(`Http error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);      
        return data;
       } catch (error) {
         console.log('Error en la petición',  error);
         return null;
       }
}


export const getLocaciones = async () => {

  try {
      const response = await fetch(`${API_URL}/location`);
      if(response.status != "200") 
      {
        throw new Error(`Http error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(data);      
      return data;
     } catch (error) {
       console.log('Error en la petición',  error);
       return null;
     }
}