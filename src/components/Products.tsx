import Product from "./Product"
import { useContext } from "react"
import { ItemsContext } from "../state"

function Products() {
  const { items, filters } = useContext(ItemsContext)

  return (
    <div className="col-span-2 mt-4 grid grid-cols-fluid place-items-center gap-4 md:col-span-1">
      {items.map(
        (item) =>
          filters.includes(item.subcategory || item.category) && (
            <Product product={item} />
          )
      )}
    </div>
  )
}

export default Products
