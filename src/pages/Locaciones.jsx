import React, { useState, useEffect } from 'react';
import { getLocaciones } from '../services/service';

const Locaciones = () => {

  
  const [locaciones, setLocaciones] = useState([]);

  const fetchPersonales = async () => {
    try {
      const data = await getLocaciones();
      setLocaciones(data.results);
    } catch (error) {
      console.log(error);
    }
    }; 



  useEffect(() => {
    fetchPersonales();
  },[])


  return (
    <div className="row">
    </div>
  )
}

export default Locaciones