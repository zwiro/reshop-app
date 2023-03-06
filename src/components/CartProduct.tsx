import { Link } from "react-router-dom"
import { CartItem } from "../state"

type CartProductProps = {
  item: CartItem
}

function CartProduct({ item }: CartProductProps) {
  return (
    <div className="mt-4 flex items-center gap-4 bg-zinc-700 p-2 text-slate-100">
      <img src={item.image} alt="" className="h-24 w-36 object-cover" />
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
      </div>
    </div>
  )
}

export default CartProduct
