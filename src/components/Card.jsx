import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({movie}) => {

  const image = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : 'image not found';
  return (
    <>
    <div className="col">
      <div className="card">
        <img src={image} alt="" className='card-img-top' />
        <div className="card-body">
          <h5 className='card-title text-dark text-overflow-1'>{movie.title}</h5>
          <p className='card-text text-overflow-2'>{movie.overview}</p>

          <div className='d-flex justify-content-between align-items-center'>
            <Link to={`/movie/${movie.id}`} className='btn btn-sm btn-outline-danger stretched-link'>Read More</Link>
            <small>
              <i className='bi bi-star-fill text-danger'></i>
              {movie.vote_average} | {movie.vote_count} Reviews
              </small>
          </div>
        </div>
      </div>

    </div>

    </>
  )
}

export default Card