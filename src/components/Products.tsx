import Product from "./Product"
import { DataTypes } from "../shopData"

type ProductsProps = {
  data: DataTypes[]
}

function Products({ data }: ProductsProps) {
  return (
    <div className="col-span-2 mt-4 grid grid-cols-fluid place-items-center gap-4 md:col-span-1">
      {data.map((item) => (
        <Product
          key={item.id}
          images={item.images}
          price={item.price}
          name={item.name}
          product={item.product}
        />
      ))}
    </div>
  )
}

export default Products
