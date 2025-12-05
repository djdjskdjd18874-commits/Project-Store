import { useState } from 'react'
import StoreCategory from './pages/StoreCategory'

import './App.css'
import Navbar from './componets/layout/Navbar'
import Footer from './componets/layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>  
   
        <Navbar/>
        
        <StoreCategory/>
        <Footer/>

         
  

     
        </>
        )
}

        export default App
