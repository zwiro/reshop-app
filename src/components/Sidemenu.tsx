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
      className="absolute top-0 bottom-0 left-0 z-50 flex w-1/3 flex-col border-r border-slate-100 bg-zinc-700 p-4 text-slate-100"
    >
      <div className="fixed top-4">
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
      </div>
      <div className="fixed bottom-4">
        <Links />
        <Socials />
      </div>
    </motion.aside>
  )
}

export default Sidemenu
