import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import App from './App.jsx'
import Login from './components/Login/Login.jsx'
import Content from './components/Content/Content.jsx'
import Hero from './components/Hero/Hero.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          
          <Route path='/' element={<Hero/>}></Route>
          
        </Route>
        <Route path='/Login' element={<Login/>}></Route>
        
      </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
