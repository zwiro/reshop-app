import { useContext } from "react"
import { motion } from "framer-motion"
import { ItemsContext } from "../../state"
import CartPanel from "./CartPanel"
import CartProduct from "./CartProduct"
import CartSummary from "./CartSummary"

function CartPage() {
  const { cart, removeFromCart, removeOneFromCart, addOneToCart } =
    useContext(ItemsContext)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const handleClick = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLButtonElement) {
      if (e.target.dataset.action === "removeFromCart") {
        removeFromCart(
          Number(e.target.dataset.itemId),
          e.target.dataset.color!,
          e.target.dataset.size!
        )
      } else if (e.target.dataset.action === "removeOneFromCart") {
        removeOneFromCart(
          Number(e.target.dataset.itemId),
          e.target.dataset.color!,
          e.target.dataset.size!
        )
      } else if (e.target.dataset.action === "addOneToCart") {
        addOneToCart(
          Number(e.target.dataset.itemId),
          e.target.dataset.color!,
          e.target.dataset.size!
        )
      }
    }
  }

  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="mx-auto mt-4 mb-24 flex w-full flex-col md:w-3/4 xl:w-1/2"
      onClick={handleClick}
    >
      <CartPanel />
      {cart.length ? (
        cart.map((item, i) => (
          <CartProduct key={`${item.id}-${i}`} item={item} />
        ))
      ) : (
        <h1 className="mt-4 text-center text-2xl">Your cart is empty.</h1>
      )}
      {cart.length > 0 && <CartSummary />}
    </motion.main>
  )
}

export default CartPage
