import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {

  const navigator = useNavigate()
  const handleSearch = (e) => {
    e.preventDefault();
    const queryTerm=e.target.search.value;
    e.target.reset()
    return navigator(`/search?q=${queryTerm}`)
  }
  return (
    <>
    <nav className='navbar navbar-expand-md fixed-top bg-dark navbar-dark '>
      <div className="container-fluid">
        <NavLink to = '/'className="navbar-brand text-danger fw-bolder"><i className="bi bi-camera-reels-fill me-2"></i>MovieHunt</NavLink>

        <button className="navbar-toggler mb-2" type='button' data-bs-toggle = 'collapse' data-bs-target= '#menu'>
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className='collapse navbar-collapse' id='menu'>
          <form onSubmit={handleSearch} className='mx-auto'>
            <input type="search" placeholder="Search" className='form-control mb-2 mb-md-0 bg-white' name='search'/>
          </form>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item fw-bolder'><NavLink to='/' className='nav-link fs-6'> Home</NavLink></li>
            <li className='nav-item fw-bolder'><NavLink to="/movies/top-rated-movies" className='nav-link fs-6'>Top rated Movies</NavLink></li>
            <li className='nav-item fw-bolder'><NavLink to="/movies/popular-movies" className='nav-link fs-6'>Popular Movies</NavLink></li>
            <li className='nav-item fw-bolder'><NavLink to="/movies/upcoming-movies" className='nav-link fs-6'>Upcoming Movies</NavLink></li>
          </ul>
        </div>
      </div>

      

    </nav>
    
    
    </>
  )
}

export default Header