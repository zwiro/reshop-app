import { useState } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { ItemsProvider } from "./state"
import useMediaQuery from "./hooks/useMediaQuery"
import ProductPage from "./pages/ProductPage"
import HomePage from "./pages/HomePage"
import ItemsPage from "./pages/ItemsPage"
import CartPage from "./pages/CartPage"
import Nav from "./components/Nav"
import Sidemenu from "./components/Sidemenu"
import Footer from "./components/Footer"

function App() {
  const [sidemenuVisible, setSidemenuVisible] = useState<Boolean>(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  function toggleSidemenu(e: React.MouseEvent) {
    if (!isDesktop) {
      e.stopPropagation()
      setSidemenuVisible((prevState) => !prevState)
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col p-4 sm:px-8 lg:px-24">
      <ItemsProvider>
        <BrowserRouter basename="/reshop-app">
          <Nav toggleSidemenu={toggleSidemenu} />
          <AnimatePresence>
            {sidemenuVisible && !isDesktop && (
              <Sidemenu toggleSidemenu={toggleSidemenu} />
            )}
          </AnimatePresence>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/items/:type" element={<ItemsPage />} />
            <Route path="/items/:type/:subtype" element={<ItemsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>

          {isDesktop && <Footer />}
        </BrowserRouter>
      </ItemsProvider>
    </div>
  )
}

export default App
