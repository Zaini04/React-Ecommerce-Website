import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { useState } from 'react'
import Order from './pages/Order'
import FilterData from './pages/FilterData'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import AboutUS from './pages/AboutUS'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const [order, setOrder] = useState(null)

  return (
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/shop' element={<Shop />} ></Route>
            <Route path='/cart' element={<Cart />} ></Route>
            <Route path='/aboutus' element={<AboutUS />} ></Route>
            <Route path='/contact' element={<Contact />} ></Route>
            <Route path='/checkout' element={<Checkout setOrder= {setOrder} />} ></Route>
            <Route path='/Order-Confirmation' element={<Order order= {order} />} ></Route>
            <Route path='/filter-data' element={<FilterData />} ></Route>
            <Route path='/products/:id' element={<ProductDetail />} ></Route>



          </Routes>
          <Footer />
            <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover
        theme="colored"
      />
      </BrowserRouter>      
    
  )
}

export default App
