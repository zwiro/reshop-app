import { BsCart } from "react-icons/bs"
import { AiOutlineMenu } from "react-icons/ai"
import Searchbar from "./Searchbar"

export type NavProps = {
  toggleSidemenu: (e: React.MouseEvent) => void
}

function Nav({ toggleSidemenu }: NavProps) {
  return (
    <nav className="flex items-center gap-4">
      <AiOutlineMenu
        onClick={(e) => toggleSidemenu(e)}
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
