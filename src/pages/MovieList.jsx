import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import useFetch from '../hooks/UseFetch';


const MovieList = ({title, apiPath}) => {

  
  const {data:movies} = useFetch(apiPath); 

  useEffect (() => {
    document.title = title;
  })

  const navigator = useNavigate()

  return (
    <>
    <main className='container'>
      {title =='Your guide to great movies'?
      ( 
        <div className='bg body-white p-5 border mb-5'>
          <h1 className='text-white fw-bolder'>Unlimited Movie Hunting platform</h1>
          {/* <p className='fs-3 text-white'>Starts at ₹149. Cancel at any time.</p> */}
          <p className='lead text-white'>Ready to embark on the ultimate hunt? Click 'Explore Now' and dive in!</p>
          {/* <input type="email" placeholder='Email address' className='me-5' />
          <input type="button" value="Get Started" /> */}
          <button className='btn btn-danger' onClick={() => navigator('/movies/upcoming-movies')}>Explore Now</button>
      </div>
      ):
      ("")
      }

      <h3 className='text-danger py-2 border-bottom'>{title}</h3>
      
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 py-2">
        {movies.map((movie)=>{
          return <Card key={movie.id} movie={movie}/>
        })}
        
      </div>
    </main>
    </>
  )
}

export default MovieList