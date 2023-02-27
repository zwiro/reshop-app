import Nav from "./components/Nav"
import Sidemenu from "./components/Sidemenu"
import data from "./shopData"
import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"

function App() {
  const [sidemenuVisible, setSidemenuVisible] = useState<Boolean>(false)

  function toggleSidemenu(e: React.MouseEvent) {
    e.stopPropagation()
    setSidemenuVisible((prevState) => !prevState)
  }

  useEffect(() => {
    if (sidemenuVisible) {
      document.body.classList.add("bg-black/80")
    } else {
      document.body.classList.remove("bg-black/80")
    }
  }, [sidemenuVisible])

  return (
    <div className="p-4">
      <Nav toggleSidemenu={toggleSidemenu} />
      <AnimatePresence>
        {sidemenuVisible && <Sidemenu toggleSidemenu={toggleSidemenu} />}
      </AnimatePresence>
    </div>
  )
}

export default App
