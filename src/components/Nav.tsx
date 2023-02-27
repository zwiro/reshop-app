import { BsCart } from "react-icons/bs"
import { AiOutlineMenu } from "react-icons/ai"
import Searchbar from "./Searchbar"

function Nav() {
  return (
    <nav className="flex items-center gap-4">
      <AiOutlineMenu
        size={30}
        className="cursor-pointer transition-transform hover:rotate-180"
      />
      <div className="text-2xl font-bold">reshop.</div>
      <Searchbar />
      <BsCart
        size={24}
        className="cursor-pointer transition-transform hover:scale-125"
      />
    </nav>
  )
}

export default Nav