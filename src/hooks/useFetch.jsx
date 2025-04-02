import React, { useEffect, useState } from 'react'


const useFetch = (apiPath,queryTerm='') => {
  
  const [data, setData] = useState([])

  const key = import.meta.env.VITE_API_KEY


  const url= `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`

  useEffect(() => {
    async function fetchData() {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data.results))
    }
    fetchData()
  }, [url]);
  
  return {data}
}

export default useFetch