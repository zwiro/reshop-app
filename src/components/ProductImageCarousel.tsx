import { motion, useCycle, AnimatePresence } from "framer-motion"
import { BsFillArrowRightCircleFill } from "react-icons/bs"

type ProductImageCarouselTypes = {
  images: string[]
}

function ProductImageCarousel({ images }: ProductImageCarouselTypes) {
  const [image, cycleImage] = useCycle(...images.keys())
  const imageAnimation = {
    initial: { x: "-100%" },
    animate: { x: 0, transition: { duration: 0.5 } },
    exit: { scale: 0, x: -100 },
    transition: { type: "tween" },
  }
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        onClick={() => cycleImage()}
        key={image}
        {...imageAnimation}
        className="group relative -z-10 flex cursor-pointer overflow-hidden group-hover:z-10"
      >
        <img src={images[image]} alt="" className="h-72 w-64 object-cover" />
        <BsFillArrowRightCircleFill
          className="absolute right-2 top-1/2 text-slate-100 opacity-0 transition-opacity group-hover:animate-pulse group-hover:opacity-100"
          size={30}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default ProductImageCarousel
