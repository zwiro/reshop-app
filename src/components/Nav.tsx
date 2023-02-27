import { BsSearch, BsCart } from "react-icons/bs"
import { AiOutlineMenu } from "react-icons/ai"

function Nav() {
  return (
    <nav className="flex items-center gap-4">
      <AiOutlineMenu size={30} />
      <div className="text-2xl font-bold">reshop.</div>
      <BsSearch className="ml-auto" size={24} />
      <BsCart size={24} />
    </nav>
  )
}

export default Nav
