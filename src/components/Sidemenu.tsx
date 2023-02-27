import Category from "./Category"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { NavProps } from "./Nav"
import { motion } from "framer-motion"
import Logo from "./Logo"

export type CategoriesType = {
  name: string
  subcategories?: string[]
}

function Sidemenu({ toggleSidemenu }: NavProps) {
  const categories: CategoriesType[] = [
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
  ]

  const sidemenuAnimation = {
    initial: { x: -300 },
    animate: { x: 0 },
    exit: { x: -300 },
    transition: { duration: 0.5 },
  }

  return (
    <motion.aside
      {...sidemenuAnimation}
      className="absolute top-0 left-0 h-full bg-slate-100 p-4"
    >
      <div className="flex items-center gap-4">
        <Logo />
        <AiOutlineCloseCircle
          onClick={(e) => toggleSidemenu(e)}
          className="ml-auto cursor-pointer transition-transform hover:scale-125"
          size={32}
        />
      </div>
      <h2 className="mt-4 text-2xl">Categories</h2>
      <ul>
        {categories.map((category, i) => (
          <Category
            key={`${category}-${i}`}
            name={category.name}
            subcategories={category.subcategories}
          />
        ))}
      </ul>
    </motion.aside>
  )
}

export default Sidemenu
