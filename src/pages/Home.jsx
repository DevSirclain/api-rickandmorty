import React, { useState, useEffect } from 'react';
import { getPeliculasPopulares } from '../services/service';


const Home = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const fetchPeliculas = async () => {
    try {
      const data = await getPeliculasPopulares();
      setPeliculas(data.results);
    } catch (error) {
      console.log(error);
    }
    };
    fetchPeliculas();
  },[])
  return (
    <div className="home-page">
      
    </div>
  )
}

export default Home
