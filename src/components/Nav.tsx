import { useContext, useMemo, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { BsCart } from "react-icons/bs"
import { AiOutlineMenu } from "react-icons/ai"
import { ItemsContext } from "../state"
import { CategoriesType } from "../types"
import useMediaQuery from "../hooks/useMediaQuery"
import Searchbar from "./Searchbar"
import Logo from "./Logo"
import Category from "./Category"

export type NavProps = {
  toggleSidemenu: (e: React.MouseEvent) => void
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
  const { cart, setCart } = useContext(ItemsContext)

  const [scroll, setScroll] = useState(0)

  const productsCount = useMemo(
    () => cart.reduce((total, item) => total + item.count, 0),
    [cart]
  )

  const isDesktop = useMediaQuery("(min-width: 768px)")

  const { scrollY }: any = useScroll()

  useMotionValueEvent(scrollY, "change", (latest: any) => {
    setScroll(latest)
  })

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItems") || "[]")
    setCart(cart)
  }, [])

  return (
    <motion.nav
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={` sticky top-0 z-10 flex items-center gap-4 ${
        scroll > 0 && "transition-colors hover:bg-slate-100/80"
      } `}
    >
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
        <Link aria-label="See your cart" to="/cart">
          <div className="group relative">
            <BsCart size={24} className="cursor-pointer" />
            {cart.length > 0 && (
              <motion.div
                key={productsCount}
                animate={{ scale: [0, 1] }}
                className="absolute -bottom-2 -right-3 h-5 w-6 cursor-pointer rounded-md border border-transparent bg-zinc-700 px-1 text-center text-xs text-slate-100 transition-colors group-hover:border-zinc-700 group-hover:bg-slate-100 group-hover:text-zinc-700"
              >
                {productsCount}
              </motion.div>
            )}
          </div>
        </Link>
      </div>
    </motion.nav>
  )
}

export default Nav
