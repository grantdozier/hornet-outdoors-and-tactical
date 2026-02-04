import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Hunting from './pages/Hunting'
import Fishing from './pages/Fishing'
import Waterfowl from './pages/Waterfowl'
import BigGame from './pages/BigGame'
import Archery from './pages/Archery'
import Apparel from './pages/Apparel'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/hunting" element={<Hunting />} />
        <Route path="shop/fishing" element={<Fishing />} />
        <Route path="shop/waterfowl" element={<Waterfowl />} />
        <Route path="shop/big-game" element={<BigGame />} />
        <Route path="shop/archery" element={<Archery />} />
        <Route path="shop/apparel" element={<Apparel />} />
        <Route path="shop/:category/:slug" element={<ProductDetail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
