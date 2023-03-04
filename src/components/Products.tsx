import Product from "./Product"
import { useContext } from "react"
import { ItemsContext } from "../state"

function Products() {
  const { items, filters } = useContext(ItemsContext)
  console.log(filters)
  return (
    <div className="col-span-2 mt-4 grid grid-cols-fluid place-items-center gap-4 md:col-span-1">
      {items.map((item) => (
        <Product
          key={item.id}
          images={item.images}
          price={item.price}
          name={item.name}
          product={item.product}
          sizes={item.sizes}
          colors={item.colors}
        />
      ))}
    </div>
  )
}

export default Products
