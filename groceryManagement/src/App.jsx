import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Product from './Pages/Product'
import Signup from './Pages/Signup'
import Order from './Pages/Order'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
    return ( <
        div > 
        <BrowserRouter >
        <Navbar />
        <Routes>
        <Route path = "/home" element = { < Home /> }/> 
        <Route path = "/login" element = { < Login/>}/> 
        <Route path = "/Product" element = { <Product />}/> 
        <Route path = "/Signup" element = { <Signup />}/> 
        <Route path = "/Order" element = { <Order />}/> 
        </Routes> 
        <Footer />
        </BrowserRouter> 
        </div>
    )
}

export default App