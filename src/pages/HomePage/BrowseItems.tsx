import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { TbHanger } from "react-icons/tb"

function BrowseItems() {
  const items = ["T-Shirts", "Hoodies", "Coats", "Dresses", "Jackets", "Jeans"]

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-4 text-center"
    >
      <h2 className="tracking-wider">Browse items</h2>
      <div className="flex flex-wrap justify-center gap-4 xl:gap-16">
        {items.map((item, i) => (
          <Link
            to={`/items/clothing/${item.toLowerCase()}`}
            key={`${item}-${i}`}
          >
            <div className="mt-4 flex h-24 w-24 cursor-pointer flex-col items-center justify-center border border-zinc-700 p-1 transition-colors hover:bg-zinc-700 hover:text-slate-100">
              <TbHanger size={30} />
              <p>{item}</p>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

export default BrowseItems
