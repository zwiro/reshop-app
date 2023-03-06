import { useContext, useState, useEffect } from "react"
import { ItemsContext } from "../state"
import { useParams, useNavigate } from "react-router-dom"
import ProductImageCarousel from "../components/ProductImageCarousel"

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
    <main>{product && <ProductImageCarousel images={product.images} />}</main>
  )
}

export default ProductPage
