import React from 'react'
import { Routes , Route} from 'react-router-dom'
import MovieList from '../pages/MovieList'
import MovieDetails from '../pages/MovieDetails'
import Search from '../pages/Search'
import PageNotFound from '../pages/PageNotFound'

const AllRotues = () => {
  return (
    < >
    <Routes>
      <Route path='/' element={<MovieList title ='Your guide to great movies' apiPath='movie/now_playing'/>}></Route>
      <Route path='movies/popular-movies' element={<MovieList title ='Popular Movies' apiPath='movie/popular'/>}></Route>
      <Route path='movies/top-rated-movies' element={<MovieList title ='Top Rated Movies' apiPath='movie/top_rated'/>}></Route>
      <Route path='movies/upcoming-movies' element={<MovieList title ='Upcoming Movies' apiPath='movie/upcoming'/>}></Route>
      <Route path='movie/:id' element={<MovieDetails />}></Route>
      <Route path='search' element={<Search apiPath='search/movie'/>}></Route>
      <Route path='*' element={<PageNotFound title ='Page not found'/>}></Route>

    </Routes>
    
    
    </>
  )
}

export default AllRotues