import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/UseFetch'
import Card from '../components/Card'

const Search = ({apiPath}) => {

  const [searchParams] = useSearchParams()
  const queryTerm = searchParams.get('q')
  const {data : movies} = useFetch(apiPath,queryTerm)

  useEffect(() => {document.title=`Search result for ${queryTerm}`})

  return (
    <>
    <main className="container">
      <h1 className='text-danger py-2 text-center'>{movies.length===0?`No result found for ${queryTerm}`:`Search result for ${queryTerm}`}</h1>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 py-2">
        {movies.map((movie)=>{
          return <Card key={movie.id} movie={movie}/>
        })}
        
      </div>
    </main>
    </>
  )
}

export default Search