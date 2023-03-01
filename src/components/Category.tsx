import { CategoriesType } from "./Nav"
import { MdExpandMore } from "react-icons/md"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"

function Category({ name, subcategories, path }: CategoriesType) {
  const [categoryExpanded, setCategoryExpanded] = useState<Boolean>(false)

  const subcategoriesAnimation = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: 0.2 },
  }

  return (
    <li
      onClick={() =>
        subcategories && setCategoryExpanded((prevState) => !prevState)
      }
      className="my-4 cursor-pointer"
    >
      <div
        className={`flex items-center gap-0 px-2 ${
          categoryExpanded && "bg-zinc-700 text-slate-100"
        } `}
      >
        <Link to={path}>
          <span className="text-xl font-bold transition-colors hover:text-blue-500 sm:text-base lg:text-lg xl:text-xl">
            {name}
          </span>
        </Link>
        {subcategories && (
          <MdExpandMore
            className={`transition-transform ${
              categoryExpanded && "rotate-180"
            }`}
          />
        )}
      </div>
      <AnimatePresence>
        {categoryExpanded && (
          <motion.ul
            {...subcategoriesAnimation}
            className="sm:bg-zinc-700 sm:p-2 sm:text-base sm:text-slate-100 md:absolute md:left-24 md:right-24 md:grid md:grid-cols-3 md:gap-4"
          >
            {subcategories?.map((subcategory, i) => (
              <li
                key={`${subcategory}-${i}`}
                className="text-sm transition-transform hover:translate-x-4 hover:underline sm:transition-none sm:hover:translate-x-0 md:text-lg"
              >
                {subcategory}
              </li>
            ))}
            <li className="text-sm transition-transform hover:translate-x-4 hover:underline sm:transition-none sm:hover:translate-x-0 md:text-lg">
              See all items
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  )
}

export default Category
