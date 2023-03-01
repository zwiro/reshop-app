import ImageCarousel from "../components/ImageCarousel"
import HeaderText from "./HeaderText"

function Header() {
  return (
    <header className="mt-4 overflow-hidden">
      <div className="relative z-[-1]">
        <ImageCarousel />
        <HeaderText>FREE SHIPPING ON ALL ORDERS ABOVE $50</HeaderText>
        <HeaderText isEven>GET 20% OFF YOUR FIRST ORDER</HeaderText>
      </div>
      <h1 className="mt-4 text-center text-2xl font-bold">
        Welcome to your ultimate shopping destination.
      </h1>
    </header>
  )
}

export default Header
