import { Link } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { CartItem } from "../../types"

type CartProductProps = {
  item: CartItem
}

const element = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { type: "tween" } },
}

function CartProduct({ item }: CartProductProps) {
  return (
    <motion.div
      variants={element}
      className="mt-4 flex items-center gap-4 bg-zinc-700 p-2 text-slate-100"
    >
      <img src={item.image} alt="" className="h-24 w-14 object-cover sm:w-48" />
      <div className="w-full">
        <div className="flex items-center justify-between">
          <Link to={`/products/${item.id}`}>
            <p className="font-bold transition-colors hover:text-blue-600">
              {item.name}
            </p>
          </Link>
          <p className="text-xs">
            {item.category}{" "}
            {`${item.subcategory ? "/" + " " + item.subcategory : ""}`}
          </p>
        </div>
        <p>
          {item.size} {item.color}
        </p>
        <div className="flex items-center justify-between">
          <p>
            {item.count} x ${item.price}
          </p>
          <p className="text-lg font-bold">${item.count * item.price}</p>
        </div>
        <button
          data-item-id={item.id}
          data-color={item.color}
          data-size={item.size}
          data-action="removeFromCart"
          className="text-sm text-red-300 transition-colors hover:text-red-500"
        >
          Remove item
        </button>
      </div>
    </motion.div>
  )
}

export default CartProduct
