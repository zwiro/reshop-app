import { useContext } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ItemsContext } from "../../state"
import Product from "./Product"

function Products() {
  const { items, filters } = useContext(ItemsContext)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="col-span-2 mt-4 grid grid-cols-fluid place-items-center gap-4 md:col-span-1"
    >
      <AnimatePresence mode="popLayout">
        {items.map(
          (item) =>
            filters.includes(item.subcategory || item.category) && (
              <Product key={item.id} product={item} />
            )
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Products
