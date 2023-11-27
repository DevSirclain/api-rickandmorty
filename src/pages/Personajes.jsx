import React, { useState, useEffect } from 'react';
import { getPersonajes, getOtherPage } from '../services/service';
import Cardview from '../components/Cardview';

const Personajes = (props) => {


  const [personajes, setPersonajes] = useState([]);
  const [info, setInfo] = useState([]);

  const fetchPersonales = async () => {
    try {
      const data = await getPersonajes();
      setPersonajes(data.results);
      setInfo(data.info);
    } catch (error) {
      console.log(error);
    }
    }; 
    const getPaginate = async (page) => {
      try {
        const data = await getOtherPage(page);
        setPersonajes(data.results);
        setInfo(data.info);
      } catch (error) {
        console.log(error);
      }
    };


  useEffect(() => {
      fetchPersonales();
   },[])


  return (
    <div className="container">

      <ul className="pagination">
        {info.prev !== null ? (
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() => getPaginate(info.prev)}
            >
              Previous
            </a>
          </li>
        ) : (
          <li className="page-item-disable">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
        )}

        {info.next !== null ? (
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() => getPaginate(info.next)}
            >
              Next
            </a>
          </li>
        ) : (
          <li className="page-item-disable">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        )}
      </ul>


      <Cardview personajes = {personajes}/>

    </div>
  )
}

export default Personajes