import ProductsPanel from "./ProductsPanel"
import Products from "./Products"
import Filters from "./Filters"
import { useContext, useState, useEffect } from "react"
import { ItemsContext } from "../../state"
import { motion } from "framer-motion"

function ItemsPage() {
  const { items, filters } = useContext(ItemsContext)
  const filteredItems = items.filter((item) =>
    filters.includes(item.subcategory || item.category)
  )

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-4 grid grid-cols-[1fr_3fr] grid-rows-[1fr_auto] md:mb-24 xl:grid-cols-[1fr_5fr]"
    >
      <ProductsPanel length={filteredItems.length} />
      <Filters />
      <Products />
    </motion.main>
  )
}

export default ItemsPage
