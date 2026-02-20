import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import CategoryPage from './pages/CategoryPage'
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
        <Route path="shop/:category" element={<CategoryPage />} />
        <Route path="shop/:category/:subcategory" element={<CategoryPage />} />
        <Route path="shop/:category/:subcategory/:slug" element={<ProductDetail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
