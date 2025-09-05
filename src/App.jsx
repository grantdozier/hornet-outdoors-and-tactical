import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import TentsCamping from './pages/TentsCamping'
import Gear from './pages/Gear'
import Apparel from './pages/Apparel'
import Hats from './pages/Hats'
import Tshirts from './pages/Tshirts'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/tents-and-camping" element={<TentsCamping />} />
        <Route path="shop/gear" element={<Gear />} />
        <Route path="shop/apparel" element={<Apparel />} />
        <Route path="shop/apparel/hats" element={<Hats />} />
        <Route path="shop/apparel/tshirts" element={<Tshirts />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
