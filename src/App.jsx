 import React from 'react'
 import Navbar from "./Components/Navbar/Navbar"
import HomeScreen from './Screen/HomeScreen/HomeScreen'
import Footer from './Footer/Footer.jsx'
import {Routes, Route} from "react-router-dom"
import Products from './Screen/Products/Products.jsx'


 function App() {
   return (
     <div>
       <Navbar/>

       <Routes>
      <Route path='/' element={<HomeScreen/>}></Route>
      <Route path='/Products' element={<Products/>}></Route>
      
       </Routes>
         <Footer/>
     </div>
   )
 }
 
 export default App
 