import { useContext } from "react"
import { ItemsContext } from "../state"
import { motion } from "framer-motion"

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
  const SortOptionsAnimation = {
    initial: { height: 0, opacity: 0 },
    animate: { height: 100, opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { opacity: { duration: 0.2 } },
  }
  return (
    <motion.div
      {...SortOptionsAnimation}
      className="absolute right-0 top-6 cursor-pointer bg-zinc-700 p-2 text-sm font-normal text-slate-100 "
    >
      <ul>
        {filters.map((filter, i) => (
          <li
            key={`${filter}-${i}`}
            className="transition-colors hover:text-blue-600"
            onClick={() => sortBy(filter.value)}
          >
            {filter.name}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default SortOptions
