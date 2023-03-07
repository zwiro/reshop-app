import ProductOptionSelect from "../../components/ProductOptionSelect"
import ProductImageCarousel from "../../components/ProductImageCarousel"
import { ItemsContext } from "../../state"
import { useContext, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { DataType } from "../../types"

type ProductProps = {
  product: DataType
}

function Product({ product }: ProductProps) {
  const { addToCart, cart } = useContext(ItemsContext)
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
    count: 1,
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

  const element = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: "tween" } },
  }

  return (
    <motion.div
      variants={element}
      layout
      className="group w-64 overflow-hidden"
    >
      <ProductImageCarousel images={product.images} />
      <div className="flex flex-col bg-zinc-700 p-4 text-slate-100">
        <span className="text-xs font-medium capitalize">
          {product.product}
        </span>
        <div className="flex justify-between">
          <Link to={`/products/${product.id}`}>
            <span className="font-bold hover:text-blue-600">
              {product.name}
            </span>
          </Link>
          <span>${product.price}</span>
        </div>
        <div className="mt-4 flex gap-4">
          <ProductOptionSelect
            name="Size"
            options={product.sizes}
            setSize={setSize}
            setColor={setColor}
          />

          <ProductOptionSelect
            name="Color"
            options={product.colors}
            setSize={setSize}
            setColor={setColor}
          />
        </div>
        <motion.button
          whileTap={{ scale: 0.75 }}
          onClick={item.size && item.color ? () => addToCart(item) : () => {}}
          disabled={!item.size || !item.color}
          className="mt-4 border border-transparent bg-slate-100 py-2 px-4 text-zinc-700 transition-colors hover:border-slate-100 hover:bg-transparent hover:text-slate-100 active:shadow-inner active:shadow-slate-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-zinc-700"
        >
          Add to cart
        </motion.button>
      </div>
    </motion.div>
  )
}

export default Product
