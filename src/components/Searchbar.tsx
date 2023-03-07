import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { BsSearch } from "react-icons/bs"
import { AiOutlineCloseCircle } from "react-icons/ai"
import useMediaQuery from "../hooks/useMediaQuery"

function Searchbar() {
  const [searchBarVisible, setSearchBarVisible] = useState<Boolean>(false)

  const isXlScreen = useMediaQuery("(min-width: 1280px)")

  const iconAnimation = {
    initial: { scale: 0, x: 20 },
    animate: { scale: 1, x: 0 },
    exit: { scale: 0, x: -20 },
    transition: { duration: 0.2 },
  }

  const inputAnimation = {
    initial: { width: 0, opacity: 0 },
    animate: isXlScreen
      ? { width: 200, opacity: 1 }
      : { width: 100, opacity: 1 },
    exit: { width: 0, opacity: 0 },
    transition: { opacity: { duration: 0.2 } },
  }

  return (
    <div className="flex items-center justify-end gap-2">
      <AnimatePresence>
        {searchBarVisible && (
          <motion.input
            {...inputAnimation}
            type="search"
            placeholder="Hoodie"
            className="rounded bg-zinc-700 px-2 text-slate-300"
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {!searchBarVisible ? (
          <motion.div
            key="glass"
            {...iconAnimation}
            onClick={() => setSearchBarVisible(true)}
          >
            <BsSearch
              className="cursor-pointer transition-transform hover:scale-125"
              size={24}
            />
          </motion.div>
        ) : (
          <motion.div
            key="close"
            {...iconAnimation}
            onClick={() => setSearchBarVisible(false)}
          >
            <AiOutlineCloseCircle
              size={24}
              className="cursor-pointer transition-transform hover:scale-125"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Searchbar
