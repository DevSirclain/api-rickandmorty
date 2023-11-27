import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetallePersonaje } from '../services/service';


const Detalle = () => {

    const {id} = useParams();
    const [detalle, setDetalle] = useState({});

    const getDetalle = async () => {
        const datos = await getDetallePersonaje(id);
        console.log("detalle ==> ", datos);
        setDetalle(datos);
    }

    useEffect(()=>{
        getDetalle()
    },[])


  return (
    <div className="card">
        <div className='row'>
            <div className='col col-4'>
                <img src={detalle.image} className="card-img-top" alt={detalle.name} style={{width: '80%'}} />
            </div>

            <div className='col col-8'>
                <div className="card-body">
                    <h5 className="card-title">{detalle.name}</h5>
                    <p className="card-text">
                        <strong>Estado:</strong> {detalle.status} <br />
                        <strong>Especie:</strong> {detalle.species} <br />
                        <strong>Genero:</strong> {detalle.gender} <br />
                        <strong>Origen:</strong> {detalle?.origin?.name} <br />
                        <strong>Ubicacion:</strong> {detalle?.location?.name}
                    </p>
                        <a href={detalle.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    More Info
                    </a>
                </div>
            </div>            
        </div> 
    </div>
  )
}

export default Detalle
