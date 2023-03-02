import { useContext } from "react"
import { ItemsContext } from "../state"

function SortOptions() {
  const { sortBy } = useContext(ItemsContext)
  const filters = [
    {
      name: "Price (descending)",
      value: "priceDesc",
    },
    {
      name: "Price (ascending)",
      value: "priceAsc",
    },
  ]
  return (
    <div className="absolute right-0 top-6 cursor-pointer bg-zinc-700 p-2 text-sm font-normal text-slate-100 ">
      <ul>
        {filters.map((filter, i) => (
          <li
            key={`${filter}-${i}`}
            className="transition-colors hover:text-blue-600"
            onClick={() => sortBy("priceAsc")}
          >
            {filter.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SortOptions
