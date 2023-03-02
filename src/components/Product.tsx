import ProductOptionSelect from "./ProductOptionSelect"
import ProductImageCarousel from "./ProductImageCarousel"

type ProductProps = {
  images: string[]
  product: string
  name: string
  price: number
  sizes: string[]
  colors: string[]
}

function Product({
  images,
  product,
  name,
  price,
  sizes,
  colors,
}: ProductProps) {
  return (
    <div className="group w-64 overflow-hidden">
      <ProductImageCarousel images={images} />
      <div className="flex flex-col bg-zinc-700 p-4 text-slate-100">
        <span className="text-xs font-medium capitalize">{product}</span>
        <div className="flex justify-between">
          <span className="font-bold">{name}</span>
          <span>${price}</span>
        </div>
        <div className="mt-4 flex gap-4">
          <ProductOptionSelect name="Size" options={sizes} />
          <ProductOptionSelect name="Color" options={colors} />
        </div>
        <button className="mt-4 border border-transparent bg-slate-100 py-2 px-4 text-zinc-700 transition-colors hover:border-slate-100 hover:bg-transparent hover:text-slate-100">
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Product
