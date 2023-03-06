import { useContext } from "react"
import CartPanel from "../components/CartPanel"
import CartProduct from "../components/CartProduct"
import CartSummary from "../components/CartSummary"
import { ItemsContext } from "../state"
import { motion } from "framer-motion"

function CartPage() {
  const { cart } = useContext(ItemsContext)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="mx-auto mt-4 mb-24 flex w-full flex-col md:w-3/4 xl:w-1/2"
    >
      <CartPanel />
      {cart.length ? (
        cart.map((item) => <CartProduct key={item.id} item={item} />)
      ) : (
        <h1 className="mt-4 text-center text-2xl">Your cart is empty.</h1>
      )}
      {cart.length > 0 && <CartSummary />}
    </motion.main>
  )
}

export default CartPage
