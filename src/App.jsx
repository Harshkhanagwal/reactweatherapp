import React from 'react'
import Home from './pages/Home'
import './style/index.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
       <Router>
        <Routes>
          <Route index element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App