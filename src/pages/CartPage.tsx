import { useContext } from "react"
import { ItemsContext } from "../state"

function CartPage() {
  const { cart } = useContext(ItemsContext)
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-2xl font-bold">
        <h1>Your cart</h1>
        <h2 className="text-xl font-normal">{cart.length} products</h2>
      </div>
      {cart.map((item) => (
        <div className="mt-4 flex">
          <img src={item.image} alt="" className="h-24 w-24" />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  )
}

export default CartPage
