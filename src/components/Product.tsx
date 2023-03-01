type ProductProps = {
  images: string[]
  product: string
  name: string
  price: number
}

function Product({ images, product, name, price }: ProductProps) {
  return (
    <div>
      <img src={images[0]} alt="" className="h-72 w-64 object-cover" />
      <div className="flex flex-col border border-t-0 border-zinc-700 bg-zinc-700 p-4 text-slate-100">
        <span className="text-xs font-medium capitalize">{product}</span>
        <div className="flex justify-between">
          <span>{name}</span>
          <span>${price}</span>
        </div>
        <button className="mt-4 border border-transparent bg-slate-100 py-2 px-4 text-zinc-700 transition-colors hover:border-slate-100 hover:bg-transparent hover:text-slate-100">
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Product
