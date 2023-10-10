import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import "../App.css"
import { Indexpage, ResourceInstance, ResourceList } from './pages';

const Parentcompo = () => {
    const location = useLocation();
  return (
         <div className="App">
      <div className='header'>
        <div className='navBar'>
          <div className='logo'>
              <img src="img\Star_Wars_Logo.png" alt='StarWars'/>
          </div>
            <div className="tabItems">
              <nav>
              <Link to="/people">People</Link>
              <Link to="/vehicles">Vehicles</Link>
              <Link to="/species">Species</Link>
              <Link to="/films">Films</Link>
              <Link to="/starships">Starships</Link>
              <Link to="/planets">Planets</Link>
              </nav>
            </div>
        </div>
      </div>
        <div className="tabComponent">
          <Routes>
          <Route path="/" element={<Indexpage/>} />
            <Route path="/:resource" element={<ResourceList key={location.pathname}/>} />
            <Route path="/:resource/:id" element={<ResourceInstance key={location.pathname} />} />
          </Routes>
        </div>
      </div>
      
  )
}

export default Parentcompo
