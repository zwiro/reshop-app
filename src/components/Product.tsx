import ProductOptionSelect from "./ProductOptionSelect"
import ProductImageCarousel from "./ProductImageCarousel"
import { ItemsContext } from "../state"
import { useContext, useState } from "react"
import { DataTypes } from "../shopData"
import { motion } from "framer-motion"

type ProductProps = {
  product: DataTypes
}

function Product({ product }: ProductProps) {
  const { addToCart, cart } = useContext(ItemsContext)
  console.log(cart)
  const [item, setItem] = useState({
    name: product.name,
    category: product.category,
    subcategory: product.subcategory,
    product: product.product,
    id: product.id,
    size: "",
    color: "",
    image: product.images[0],
    price: product.price,
  })

  const setSize = (chosenSize: string): void => {
    setItem((prevItem) => {
      return {
        ...prevItem,
        size: chosenSize,
      }
    })
  }

  const setColor = (chosenColor: string): void => {
    setItem((prevItem) => {
      return {
        ...prevItem,
        color: chosenColor,
      }
    })
  }

  return (
    <div className="group w-64 overflow-hidden">
      <ProductImageCarousel images={product.images} />
      <div className="flex flex-col bg-zinc-700 p-4 text-slate-100">
        <span className="text-xs font-medium capitalize">
          {product.product}
        </span>
        <div className="flex justify-between">
          <span className="font-bold">{product.name}</span>
          <span>${product.price}</span>
        </div>
        <div className="mt-4 flex gap-4">
          <ProductOptionSelect
            name="Size"
            options={product.sizes}
            setSize={setSize}
          />
          <ProductOptionSelect
            name="Color"
            options={product.colors}
            setColor={setColor}
          />
        </div>
        <motion.button
          whileTap={{ scale: 0.75 }}
          onClick={item.size && item.color ? () => addToCart(item) : () => {}}
          className="mt-4 border border-transparent bg-slate-100 py-2 px-4 text-zinc-700 transition-colors hover:border-slate-100 hover:bg-transparent hover:text-slate-100 active:shadow-inner active:shadow-slate-100"
        >
          Add to cart
        </motion.button>
      </div>
    </div>
  )
}

export default Product
