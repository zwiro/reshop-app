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
  },
  {
    name: "Footwear",
    subcategories: ["Sneakers", "Boots", "Sandals", "Heels", "Flats"],
  },
  { name: "Accessories" },
  { name: "All items" },
]

function Nav({ toggleSidemenu }: NavProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  return (
    <nav className="flex items-center gap-4">
      <AiOutlineMenu
        onClick={(e) => toggleSidemenu(e)}
        size={30}
        className="cursor-pointer transition-transform hover:rotate-180 md:hidden"
      />
      <Logo />
      {isDesktop && (
        <ul className="flex w-full justify-center gap-1 md:gap-4">
          {categories.map((category, i) => (
            <Category
              key={`${category}-${i}`}
              name={category.name}
              subcategories={category.subcategories}
            />
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
