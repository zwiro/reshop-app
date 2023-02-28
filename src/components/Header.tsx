import ImageCarousel from "../components/ImageCarousel"

function Header() {
  return (
    <header className="mt-4 overflow-hidden">
      <div className="relative">
        <ImageCarousel />
        <p className="absolute left-2 top-2 bg-slate-100/60 px-2 text-xl font-bold">
          FREE SHIPPING ON ALL ORDERS ABOVE $50
        </p>
        <p className="absolute right-2 bottom-2 bg-slate-100/60 px-2 text-xl font-bold">
          GET 20% OFF YOUR FIRST ORDER
        </p>
      </div>
      <h1 className="mt-4 text-center text-2xl font-bold">
        Welcome to your ultimate shopping destination.
      </h1>
    </header>
  )
}

export default Header
