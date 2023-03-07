import { useContext, useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ItemsContext } from "../../state"
import ProductDetails from "./ProductDetails"
import ProductImageCarousel from "../../components/ProductImageCarousel"

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
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="my-24 flex flex-col items-center justify-center gap-4 md:flex-row lg:my-auto xl:px-28"
    >
      {product && (
        <>
          <div className="md:w-1/3 lg:w-1/2">
            <ProductImageCarousel images={product.images} isProductPage />
          </div>
          <ProductDetails product={product} />
        </>
      )}
    </motion.main>
  )
}

export default ProductPage
