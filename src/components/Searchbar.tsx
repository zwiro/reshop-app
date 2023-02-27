import { BsSearch } from "react-icons/bs"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

function Searchbar() {
  const [searchBarVisible, setSearchBarVisible] = useState(false)

  const iconAnimation = {
    initial: { scale: 0, x: 20 },
    animate: { scale: 1, x: 0 },
    exit: { scale: 0, x: -20 },
    transition: { duration: 0.2 },
  }

  const inputAnimation = {
    initial: { width: 0 },
    animate: { width: 200 },
    exit: { width: 0, opacity: 0 },
    transition: { duration: 0.2 },
  }

  return (
    <div className="ml-auto flex items-center gap-2">
      <AnimatePresence>
        {searchBarVisible && (
          <>
            <motion.input
              {...inputAnimation}
              type="search"
              placeholder="Hoodie"
              className="rounded bg-zinc-700 px-2 text-slate-300"
            />
          </>
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
          <motion.div key="close" {...iconAnimation}>
            <AiOutlineCloseCircle
              onClick={() => setSearchBarVisible(false)}
              className="cursor-pointer transition-transform hover:scale-125"
              size={24}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Searchbar
