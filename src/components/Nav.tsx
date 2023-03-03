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
  subcategories?: SubcategoriesType[]
  path?: string
  isChecked?: boolean
}

export type SubcategoriesType = {
  name: string
  path: string
  isChecked: boolean
}

export const categories: CategoriesType[] = [
  {
    name: "Clothing",
    subcategories: [
      { name: "T-Shirts", path: "/items/clothing/t-shirts", isChecked: false },
      { name: "Dresses", path: "/items/clothing/dresses", isChecked: false },
      { name: "Jeans", path: "/items/clothing/jeans", isChecked: false },
      { name: "Jackets", path: "/items/clothing/jackets", isChecked: false },
      { name: "Sweaters", path: "/items/clothing/sweaters", isChecked: false },
      { name: "Hoodies", path: "/items/clothing/hoodies", isChecked: false },
      { name: "Blazers", path: "/items/clothing/blazers", isChecked: false },
      { name: "Skirts", path: "/items/clothing/skirts", isChecked: false },
      { name: "Shorts", path: "/items/clothing/shorts", isChecked: false },
      { name: "Coats", path: "/items/clothing/coats", isChecked: false },
    ],
    path: "/items/clothing",
    isChecked: false,
  },
  {
    name: "Footwear",
    subcategories: [
      { name: "Sneakers", path: "/items/footwear/sneakers", isChecked: false },
      { name: "Boots", path: "/items/footwear/boots", isChecked: false },
      { name: "Sandals", path: "/items/footwear/sandals", isChecked: false },
      { name: "Heels", path: "/items/footwear/heels", isChecked: false },
      { name: "Flats", path: "/items/footwear/flats", isChecked: false },
    ],
    path: "/items/footwear",
    isChecked: false,
  },
  { name: "Accessories", path: "/items/accessories", isChecked: false },
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
