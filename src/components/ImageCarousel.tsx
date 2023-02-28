import { useEffect } from "react"
import { motion, AnimatePresence, useCycle } from "framer-motion"
import heroImage1 from "../assets/hero-1.jpg"
import heroImage2 from "../assets/hero-2.jpg"
import heroImage3 from "../assets/hero-3.jpg"

const images = [
  { id: 1, src: heroImage1 },
  { id: 2, src: heroImage2 },
  { id: 3, src: heroImage3 },
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
