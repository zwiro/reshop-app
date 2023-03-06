import { useContext } from "react"
import CartPanel from "../components/CartPanel"
import CartProduct from "../components/CartProduct"
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
      <p className="ml-auto mt-4 text-lg">
        Total amount:{" "}
        <span className="font-bold">
          ${cart.reduce((total, item) => total + item.price * item.count, 0)}
        </span>
      </p>
      <button className="ml-auto mt-2 border border-transparent bg-zinc-700 px-4 py-2 text-slate-100 transition-colors hover:border-zinc-700 hover:bg-transparent hover:text-zinc-700 active:shadow-inner active:shadow-zinc-700">
        Checkout
      </button>
    </main>
  )
}

export default CartPage
