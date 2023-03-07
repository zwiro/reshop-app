import { useState } from "react"
import { useParams } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { MdExpandMore } from "react-icons/md"
import SortOptions from "./SortOptions"

type ProductsPanelTypes = {
  length: number
}

function ProductsPanel({ length }: ProductsPanelTypes) {
  const [sortingOptionVisible, setSortingOptionsVisible] = useState(false)

  const { type } = useParams()

  return (
    <div className="col-span-full flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold capitalize">{type}</h1>
        <span>{length} products</span>
      </div>
      <div
        onClick={() => setSortingOptionsVisible((prevState) => !prevState)}
        className={`relative z-[1000] ml-auto flex cursor-pointer items-center bg-transparent px-2 font-bold transition-colors ${
          sortingOptionVisible && "bg-zinc-700 text-slate-100"
        } `}
      >
        Sort
        <MdExpandMore
          className={` transition-transform ${
            sortingOptionVisible && "rotate-180"
          }`}
        />
        <AnimatePresence>
          {sortingOptionVisible && <SortOptions />}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ProductsPanel
