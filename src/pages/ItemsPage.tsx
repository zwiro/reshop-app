import data from "../shopData"
import { useParams } from "react-router-dom"
import { MdExpandMore } from "react-icons/md"
import Product from "../components/Products"

function ItemsPage() {
  const { type } = useParams()
  return (
    <main className="mt-4 flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold capitalize">{type}</h1>
        <span>{data.length} products</span>
      </div>
      <div className="ml-auto flex cursor-pointer items-center font-bold">
        Sort
        <MdExpandMore />
      </div>
      <div className="mt-4 grid grid-cols-fluid place-items-center gap-4">
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
    </main>
  )
}

export default ItemsPage
