import { useState } from 'react'
import './App.css'
import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Product from './Pages/Poduct'
import Signup from './Pages/Signup'
import Employee from './Pages/Employees'
import Order from './Pages/Order'
import OrderRecieved from './Pages/OrderRecieved'
import Stock from './Pages/Stock'
import {BrowserRouter,Route, Routes } from 'react-router-dom' 




function App() {


    return (

        <div>
            <BrowserRouter>
            <Navbar />
                <Routes>
                   <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/poduct" element={<Product />} />
                    <Route path="/Signup" element={<Signup />}/>
                    <Route path='/Employees' element={<Employee />}/>
                    <Route path="/Order" element={<Order />} />
                    <Route path="/OrdersRecieved" element={<OrderRecieved />} />
                    <Route path="/Stock" element={<Stock />}/>
                </Routes>
            <Footer />
            </BrowserRouter>
        </div>

    )
}

export default App