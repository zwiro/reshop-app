import Nav from "./components/Nav"
import Sidemenu from "./components/Sidemenu"
import data from "./shopData"
import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import useMediaQuery from "./hooks/useMediaQuery"

function App() {
  const [sidemenuVisible, setSidemenuVisible] = useState<Boolean>(false)
  const isDesktop = useMediaQuery("(min-width: 640px)")

  function toggleSidemenu(e: React.MouseEvent) {
    if (!isDesktop) {
      e.stopPropagation()
      setSidemenuVisible((prevState) => !prevState)
    }
  }

  useEffect(() => {
    if (!isDesktop) {
      if (sidemenuVisible) {
        document.body.classList.add("bg-black/80")
      } else {
        document.body.classList.remove("bg-black/80")
      }
    }
  }, [sidemenuVisible])

  return (
    <div className="min-h-screen p-4">
      <Nav toggleSidemenu={toggleSidemenu} />
      <AnimatePresence>
        {sidemenuVisible && !isDesktop && (
          <Sidemenu toggleSidemenu={toggleSidemenu} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
