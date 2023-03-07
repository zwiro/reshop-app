import { useContext, useMemo } from "react"
import { ItemsContext } from "../../state"

function CartPanel() {
  const { cart } = useContext(ItemsContext)
  const productsCount = useMemo(
    () => cart.reduce((total, item) => total + item.count, 0),
    [cart]
  )
  return (
    <div className="flex items-center justify-between text-2xl font-bold">
      <h1>Your cart</h1>
      <h2 className="text-xl font-normal">{productsCount} products</h2>
    </div>
  )
}

export default CartPanel
