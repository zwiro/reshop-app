import { BsCart } from "react-icons/bs"
import { AiOutlineMenu } from "react-icons/ai"
import Searchbar from "./Searchbar"
import Logo from "./Logo"
import Category from "./Category"
import useMediaQuery from "../hooks/useMediaQuery"

export type NavProps = {
  toggleSidemenu: (e: React.MouseEvent) => void
}

export type CategoriesType = {
  name: string
  subcategories?: string[]
  path?: string
}
export const categories: CategoriesType[] = [
  {
    name: "Clothing",
    subcategories: [
      "T-Shirts",
      "Dresses",
      "Jeans",
      "Jackets",
      "Sweaters",
      "Hoodies",
      "Blazers",
      "Skirts",
      "Shorts",
      "Coats",
    ],
    path: "/items/clothing",
  },
  {
    name: "Footwear",
    subcategories: ["Sneakers", "Boots", "Sandals", "Heels", "Flats"],
    path: "/items/footwear",
  },
  { name: "Accessories", path: "/items/accessories" },
  { name: "All items", path: "/items/all" },
]

function Nav({ toggleSidemenu }: NavProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  return (
    <nav className="sticky top-0 flex items-center gap-4">
      <AiOutlineMenu
        onClick={(e) => toggleSidemenu(e)}
        size={30}
        className="relative cursor-pointer transition-transform hover:rotate-180 md:hidden"
      />
      <Logo />
      {isDesktop && (
        <ul className="relative z-[1000] flex w-full justify-center gap-1 lg:gap-10 xl:gap-16">
          {categories.map((category, i) => (
            <Category key={`${category}-${i}`} {...category} />
          ))}
        </ul>
      )}
      <div className="ml-auto flex gap-2">
        <Searchbar />
        <BsCart
          size={24}
          className="cursor-pointer transition-transform hover:scale-125"
        />
      </div>
    </nav>
  )
}

export default Nav
