import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const params = useParams()

  const [movie, setMovie] = useState([])

  const key = import.meta.env.VITE_API_KEY
  const url= `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`

  const image = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : 'image not found';


  useEffect(()=>{
    async function getMovieDetails() {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setMovie(data))
    }
    getMovieDetails()
  },[])

  useEffect(()=>{document.title = `${movie.title}`})
  return (
    <>
    <main className='container'>
      <h5 className='text-danger py-2 border-bottom mb-3'>{movie.title}</h5>
      <div className="row">
        <div className="col-md-4">
          <img src={image} alt="" className='img-fluid img-thumbnail'/>
        </div>
        <div className="col-md-8">
          <h3 className='text-white'>{movie.title}</h3>
          <p className='mt-3 text-white'>{movie.overview}</p>

          {movie.genres ? (
            <p className='d-flex gap-3 fs-5'>
              {movie.genres.map((genre) => (
                <span key={genre.id} className='badge bg-danger'>
                  {genre.name}
                </span>
              ))}
            </p>) :
            ("")
          }

          <p className='mt-2 text-white'><i className='bi bi-star-fill text-danger'></i> {movie.vote_average} | <i className='bi bi-people-fill text-danger'></i> {movie.vote_count} reviews</p>

          <table className='table table-bordered w-50 mt-2 text-white'>
            <tbody>
              <tr>
                <th>Runtime</th>
                <td>{movie.runtime} minutes</td>
              </tr>

              <tr>
                <th>Release Date</th>
                <td>{movie.release_date}</td>
              </tr>

            </tbody>
          </table>
          <a href={`https://www.imdb.com/title/${movie.imdb_id}/`} target='_blank' className='btn btn-primary'>View in IMDB</a>
        </div>
      </div>

    </main>
    </>
  )
}

export default MovieDetails