import { useContext } from "react"
import CartProduct from "../components/CartProduct"
import { ItemsContext } from "../state"

function CartPage() {
  const { cart } = useContext(ItemsContext)
  console.log(cart)
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-2xl font-bold">
        <h1>Your cart</h1>
        <h2 className="text-xl font-normal">{cart.length} products</h2>
      </div>
      {cart.map((item) => (
        <CartProduct item={item} />
      ))}
    </div>
  )
}

export default CartPage
