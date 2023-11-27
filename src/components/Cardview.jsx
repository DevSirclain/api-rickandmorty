import React from 'react';
import { Link } from 'react-router-dom';

const Cardview = ({personajes}) => {
    return (
      <div className="row">

        {personajes.map(personaje => (
          <div key={personaje?.id} className='col col-3'>
            <div className="card">

              <Link to={`/detalle/${personaje?.id}`}>
                <img className="card-img-top" src={personaje?.image} alt="Card image" style={{width: '100%'}} />
              </Link> 

              <div className="card-body">
                <h4 className="card-title" style={{textAlign:'center'}}>{personaje?.name}</h4>
              </div>
            

            </div>
            <br/>
          </div>

        ))}
      </div>
    );
  }
  
  export default Cardview;