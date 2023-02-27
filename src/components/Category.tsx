import { CategoriesType } from "./Nav"
import { MdExpandMore } from "react-icons/md"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

function Category({ name, subcategories }: CategoriesType) {
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
      className="relative my-4 cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold transition-colors hover:text-blue-700">
          {name}
        </span>
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
          <ul className="sm:absolute sm:w-full sm:bg-zinc-700 sm:p-4 sm:text-base sm:text-slate-100 ">
            {subcategories?.map((subcategory, i) => (
              <motion.li
                {...subcategoriesAnimation}
                key={`${subcategory}-${i}`}
                className="text-sm transition-transform hover:translate-x-4 hover:underline sm:transition-none sm:hover:translate-x-0"
              >
                {subcategory}
              </motion.li>
            ))}
            <li className="text-sm transition-transform hover:translate-x-4 hover:underline sm:transition-none sm:hover:translate-x-0">
              See all items
            </li>
          </ul>
        )}
      </AnimatePresence>
    </li>
  )
}

export default Category
