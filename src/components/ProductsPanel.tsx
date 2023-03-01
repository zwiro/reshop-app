import { useParams } from "react-router-dom"
import { MdExpandMore } from "react-icons/md"

type ProductsPanelTypes = {
  length: number
}

function ProductsPanel({ length }: ProductsPanelTypes) {
  const { type } = useParams()

  return (
    <div className="col-span-full flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold capitalize">{type}</h1>
        <span>{length} products</span>
      </div>
      <div className="ml-auto flex cursor-pointer items-center font-bold">
        Sort
        <MdExpandMore />
      </div>
    </div>
  )
}

export default ProductsPanel
