import ProductsPanel from "../components/ProductsPanel"
import Products from "../components/Products"
import Filters from "../components/Filters"
import useMediaQuery from "../hooks/useMediaQuery"
import { useContext } from "react"
import { ItemsContext } from "../state"

function ItemsPage() {
  const { items } = useContext(ItemsContext)
  const isMdScreen = useMediaQuery("(min-width: 768px)")
  return (
    <main className="mt-4 grid grid-cols-[1fr_3fr] grid-rows-[1fr_auto] md:mb-24 xl:grid-cols-[1fr_5fr]">
      <ProductsPanel length={items.length} />
      {isMdScreen && <Filters />}
      <Products />
    </main>
  )
}

export default ItemsPage
