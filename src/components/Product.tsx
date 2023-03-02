import ProductOptionSelect from "./ProductOptionSelect"
import { AnimatePresence, motion, useCycle } from "framer-motion"
import { BsFillArrowRightCircleFill } from "react-icons/bs"

type ProductProps = {
  images: string[]
  product: string
  name: string
  price: number
  sizes: string[]
  colors: string[]
}

function Product({
  images,
  product,
  name,
  price,
  sizes,
  colors,
}: ProductProps) {
  const [image, cycleImage] = useCycle(...images.keys())

  const imageAnimation = {
    initial: { x: "-100%" },
    animate: { x: 0, transition: { duration: 0.5 } },
    exit: { scale: 0, x: -100 },
    transition: { type: "tween" },
  }

  return (
    <div className="w-64 overflow-hidden bg-zinc-700">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={image}
          {...imageAnimation}
          className="group relative flex cursor-pointer overflow-hidden"
        >
          <img
            onClick={() => cycleImage()}
            src={images[image]}
            alt=""
            className="h-72 w-64 object-cover"
          />
          <BsFillArrowRightCircleFill
            className="absolute right-2 top-1/2 text-slate-100 opacity-0 transition-opacity group-hover:animate-pulse group-hover:opacity-100"
            size={30}
          />
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col border border-t-0 border-zinc-700 p-4 text-slate-100">
        <span className="text-xs font-medium capitalize">{product}</span>
        <div className="flex justify-between">
          <span className="font-bold">{name}</span>
          <span>${price}</span>
        </div>
        <div className="mt-4 flex gap-4">
          <ProductOptionSelect name="Size" options={sizes} />
          <ProductOptionSelect name="Color" options={colors} />
        </div>
        <button className="mt-4 border border-transparent bg-slate-100 py-2 px-4 text-zinc-700 transition-colors hover:border-slate-100 hover:bg-transparent hover:text-slate-100">
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Product
