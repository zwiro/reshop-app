import Category from "./Category"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { NavProps } from "./Nav"
import { motion } from "framer-motion"
import Logo from "./Logo"
import { categories } from "./Nav"
import Socials from "./Socials"
import Links from "./Links"

type SidemenuProps = NavProps

function Sidemenu({ toggleSidemenu }: SidemenuProps) {
  const sidemenuAnimation = {
    initial: { x: -300 },
    animate: { x: 0 },
    exit: { x: -300 },
    transition: { duration: 0.5 },
  }

  return (
    <motion.aside
      {...sidemenuAnimation}
      className="absolute top-0 left-0 flex h-full flex-col bg-slate-100 p-4"
    >
      <div className="flex items-center gap-4">
        <Logo />
        <AiOutlineCloseCircle
          onClick={(e) => toggleSidemenu(e)}
          className="ml-auto cursor-pointer transition-transform hover:scale-125"
          size={32}
        />
      </div>
      <ul>
        {categories.map((category, i) => (
          <Category
            key={`${category}-${i}`}
            name={category.name}
            subcategories={category.subcategories}
          />
        ))}
      </ul>
      <Links />
      <Socials />
    </motion.aside>
  )
}

export default Sidemenu
