import Nav from "./components/Nav"
import Sidemenu from "./components/Sidemenu"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import useMediaQuery from "./hooks/useMediaQuery"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import ItemsPage from "./pages/ItemsPage"
import { ItemsProvider } from "./state"
import CartPage from "./pages/CartPage"

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
    <div className="relative min-h-screen p-4 sm:px-8 lg:px-24">
      <ItemsProvider>
        <BrowserRouter>
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
            <Route path="*" element={<HomePage />} />
          </Routes>

          {isDesktop && <Footer />}
        </BrowserRouter>
      </ItemsProvider>
    </div>
  )
}

export default App
