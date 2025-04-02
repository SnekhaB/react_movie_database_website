import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
    <div className='container text-center d-flex flex-column justify-content-center align-items-center'>
      <h1 className='text-white mb-4'>Oops..... Page not Found</h1>
      <p className='text-center'>
        <Link to = '/' className='btn btn-danger'>Go to Home Page</Link>
      </p>
      </div>
    </>
  )
}

export default PageNotFound