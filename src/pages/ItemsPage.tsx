import data from "../shopData"
import ProductsPanel from "../components/ProductsPanel"
import Products from "../components/Products"
import Filters from "../components/Filters"
import useMediaQuery from "../hooks/useMediaQuery"

function ItemsPage() {
  const isMdScreen = useMediaQuery("(min-width: 768px)")
  return (
    <main className="mt-4 grid grid-cols-[1fr_3fr] grid-rows-[1fr_auto] md:mb-24">
      <ProductsPanel length={data.length} />
      {isMdScreen && <Filters />}
      <Products data={data} />
    </main>
  )
}

export default ItemsPage
