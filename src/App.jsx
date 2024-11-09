import { HashRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import CheckOut from "./pages/CheckOut"
import OrderConfirmation from "./pages/OrderConfirmation"
import { useState } from "react"
import FilteredData from "./pages/FilteredData"
import ProductDetails from "./pages/ProductDetails"

const App = () => {

  const [order, setOrder] = useState(null)

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/chekout" element={<CheckOut setOrder={setOrder} />} />
        <Route path="/order-confirmation" element={<OrderConfirmation order={order} />} />
        <Route path="/filtered-data" element={<FilteredData />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App