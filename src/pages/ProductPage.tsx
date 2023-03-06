import { useContext, useState, useEffect } from "react"
import { ItemsContext } from "../state"
import { useParams, useNavigate } from "react-router-dom"
import ProductImageCarousel from "../components/ProductImageCarousel"
import ProductDetails from "../components/ProductDetails"

function ProductPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { items } = useContext(ItemsContext)
  const [product, setProduct] = useState(
    items.find((item) => item.id === Number(id))
  )

  useEffect(() => {
    if (product === undefined) {
      navigate("/")
    }
  }, [])

  return (
    <main className="my-24 flex flex-col items-center justify-center gap-4 md:flex-row lg:my-auto xl:px-28">
      {product && (
        <>
          <div className="md:w-1/3 lg:w-1/2">
            <ProductImageCarousel images={product.images} isProductPage />
          </div>
          <ProductDetails product={product} />
        </>
      )}
    </main>
  )
}

export default ProductPage
