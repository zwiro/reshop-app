import { useEffect } from "react"
import { motion, AnimatePresence, useCycle } from "framer-motion"

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1612731486606-2614b4d74921?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1471119017026-179f1bb0a70e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1137&q=80",
  },
]

const imageVariants = {
  enter: { opacity: 1, transition: { duration: 2, delay: 0.5 } },
  exit: { opacity: 0, transition: { duration: 2 } },
}

const ImageCarousel = () => {
  const [currentImageIndex, cycleCurrentImageIndex] = useCycle(0, 1, 2)

  useEffect(() => {
    const intervalId = setInterval(() => {
      cycleCurrentImageIndex()
    }, 8000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.img
          key={images[currentImageIndex].id}
          src={images[currentImageIndex].src}
          alt="Hero image"
          variants={imageVariants}
          initial="exit"
          animate="enter"
          exit="exit"
          className="h-96 w-full object-cover"
        />
      </AnimatePresence>
    </div>
  )
}

export default ImageCarousel
