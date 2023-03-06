import { DataTypes } from "../shopData"
import { CartItem, ItemsContext } from "../state"
import { useState, useEffect, useContext } from "react"
import ProductOptionSelect from "./ProductOptionSelect"
import { motion } from "framer-motion"

type ProductDetailsProps = {
  product: DataTypes
}

function ProductDetails({ product }: ProductDetailsProps) {
  const { addToCart, cart } = useContext(ItemsContext)
  const [item, setItem] = useState<CartItem>({
    name: "",
    category: "",
    subcategory: "",
    product: "",
    id: 0,
    size: "",
    color: "",
    image: "",
    price: 0,
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

  useEffect(() => {
    setItem({
      name: product!.name,
      category: product!.category,
      subcategory: product?.subcategory,
      product: product!.product,
      id: product!.id,
      size: "",
      color: "",
      image: product!.images[0],
      price: product!.price,
      count: 1,
    })
  }, [])

  return (
    <div className="space-y-2 md:w-1/2 lg:space-y-4">
      <p className="lg:text-lg">{product.category}</p>
      <p className="border-b pb-2 text-xs lg:text-sm">{product.subcategory}</p>
      <p className="text-xl font-bold lg:text-2xl">{product.name}</p>
      <p className="w-min rounded bg-zinc-700 px-4 py-1 text-lg text-slate-100 lg:px-6 lg:py-2">
        ${product.price}
      </p>
      <p className="border-y py-2 text-sm lg:text-base">
        {product.description}
      </p>
      <div className="mt-4 flex gap-1 text-slate-100 lg:gap-4">
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
        <motion.button
          whileTap={{ scale: 0.75 }}
          onClick={item.size && item.color ? () => addToCart(item) : () => {}}
          disabled={!item.size || !item.color}
          className="ml-auto border border-transparent bg-zinc-700 py-2 px-4 text-slate-100 transition-colors hover:border-zinc-700 hover:bg-transparent hover:text-zinc-700 active:shadow-inner active:shadow-zinc-700 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-slate-100"
        >
          Add to cart
        </motion.button>
      </div>
    </div>
  )
}

export default ProductDetails
