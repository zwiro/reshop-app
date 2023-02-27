import { BsCart } from "react-icons/bs"
import { AiOutlineMenu } from "react-icons/ai"
import Searchbar from "./Searchbar"
import Logo from "./Logo"
import Category from "./Category"

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
  return (
    <nav className="flex items-center gap-4">
      <AiOutlineMenu
        onClick={(e) => toggleSidemenu(e)}
        size={30}
        className="cursor-pointer transition-transform hover:rotate-180 sm:hidden"
      />
      <Logo />
      <ul className="flex w-full justify-center gap-8">
        {categories.map((category, i) => (
          <Category
            key={`${category}-${i}`}
            name={category.name}
            subcategories={category.subcategories}
          />
        ))}
      </ul>
      <Searchbar />
      <BsCart
        size={24}
        className="cursor-pointer transition-transform hover:scale-125"
      />
    </nav>
  )
}

export default Nav
