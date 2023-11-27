import React, { useState, useEffect } from 'react';
import { getEpisodios } from '../services/service';

const Capitulos = () => {

  
  const [episodios, setEpisodios] = useState([]);

  const fetchPersonales = async () => {
    try {
      const data = await getEpisodios();
      setEpisodios(data.results);
    } catch (error) {
      console.log(error);
    }
    }; 



  useEffect(() => {
    fetchPersonales();
  },[])


  return (
    <div className="home-page">
    </div>
  )
}

export default Capitulos