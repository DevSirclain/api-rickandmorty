import React from 'react';


const Menu = () => {
  return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Rick & Morty</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/personajes">Personajes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/locaciones">Locaciones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/capitulos">Capitulos</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="text" placeholder="Buscar" />
            <button className="btn btn-primary" type="button">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Menu;