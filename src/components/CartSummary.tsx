import { useContext } from "react"
import { ItemsContext } from "../state"

function CartSummary() {
  const { cart } = useContext(ItemsContext)
  return (
    <>
      <p className="ml-auto mt-4 text-lg">
        Total amount:{" "}
        <span className="font-bold">
          ${cart.reduce((total, item) => total + item.price * item.count, 0)}
        </span>
      </p>
      <button className="ml-auto mt-2 border border-transparent bg-zinc-700 px-4 py-2 text-slate-100 transition-colors hover:border-zinc-700 hover:bg-transparent hover:text-zinc-700 active:shadow-inner active:shadow-zinc-700">
        Checkout
      </button>
    </>
  )
}

export default CartSummary
