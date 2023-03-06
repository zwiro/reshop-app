import { useContext } from "react"
import CartPanel from "../components/CartPanel"
import CartProduct from "../components/CartProduct"
import CartSummary from "../components/CartSummary"
import { ItemsContext } from "../state"

function CartPage() {
  const { cart } = useContext(ItemsContext)

  return (
    <main className="mx-auto mt-4 mb-24 flex w-full flex-col md:w-3/4 xl:w-1/2">
      <CartPanel />
      {cart.length ? (
        cart.map((item) => <CartProduct item={item} />)
      ) : (
        <h1 className="mt-4 text-center text-2xl">Your cart is empty.</h1>
      )}
      {cart.length > 0 && <CartSummary />}
    </main>
  )
}

export default CartPage
