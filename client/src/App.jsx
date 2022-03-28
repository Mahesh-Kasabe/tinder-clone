import React from 'react'
import './App.css'
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom"
import Tinder from './Components/Footer/Tinder'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    
    <div className="App">
    <Router>
      <Routes>

        <Route path='home' exact element={<> <Navbar /> </>} />

        <Route path='/' element={<> <Header/> <Tinder/> <Footer/> </>} />

      </Routes>

    </Router>

    </div>
    
  )
}

export default App
