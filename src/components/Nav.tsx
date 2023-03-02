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
}

export type SubcategoriesType = {
  name: string
  path: string
}

export const categories: CategoriesType[] = [
  {
    name: "Clothing",
    subcategories: [
      { name: "T-Shirts", path: `/items/clothing/tshirts` },
      { name: "Dresses", path: `/items/clothing/dresses` },
      { name: "Jeans", path: `/items/clothing/jeans` },
      { name: "Jackets", path: `/items/clothing/jackets` },
      { name: "Sweaters", path: `/items/clothing/sweaters` },
      { name: "Hoodies", path: `/items/clothing/hoodies` },
      { name: "Blazers", path: `/items/clothing/blazers` },
      { name: "Skirts", path: `/items/clothing/skirts` },
      { name: "Shorts", path: `/items/clothing/shorts` },
      { name: "Coats", path: `/items/clothing/coats` },
    ],
    path: "/items/clothing",
  },
  {
    name: "Footwear",
    subcategories: [
      { name: "Sneakers", path: "/items/footwear/sneakers" },
      { name: "Boots", path: "/items/footwear/boots" },
      { name: "Sandals", path: "/items/footwear/sandals" },
      { name: "Heels", path: "/items/footwear/heels" },
      { name: "Flats", path: "/items/footwear/flats" },
    ],
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
