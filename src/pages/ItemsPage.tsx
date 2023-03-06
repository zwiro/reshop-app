import ProductsPanel from "../components/ProductsPanel"
import Products from "../components/Products"
import Filters from "../components/Filters"
import { useContext, useState, useEffect } from "react"
import { ItemsContext } from "../state"

function ItemsPage() {
  const { items, filters } = useContext(ItemsContext)
  const filteredItems = items.filter((item) =>
    filters.includes(item.subcategory || item.category)
  )

  return (
    <main className="mt-4 grid grid-cols-[1fr_3fr] grid-rows-[1fr_auto] md:mb-24 xl:grid-cols-[1fr_5fr]">
      <ProductsPanel length={filteredItems.length} />
      <Filters />
      <Products />
    </main>
  )
}

export default ItemsPage
