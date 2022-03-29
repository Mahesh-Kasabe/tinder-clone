import React from 'react'
import './App.css'
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom"
import Tinder from './Components/Footer/Tinder'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'

function App() {

  return (
    
    <div className="App">
    <Router>
      <Routes>

        <Route path='/' exact element={<> <Navbar /> </>} />

        <Route path='home' element={<> <Header/> <Tinder/> <Footer/> </>} />

        <Route path='profile' element={<> <Header /> <Home /> </>} />

      </Routes>

    </Router>

    </div>
    
  )
}

export default App
