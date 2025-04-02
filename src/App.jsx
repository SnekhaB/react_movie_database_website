import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AllRotues from './routes/AllRotues'
import './App.css'

const App = () => {
  return (
    <>
    <div>
      <Header />
      <AllRotues />
      <Footer />
    </div>
    </>
  )
}

export default App