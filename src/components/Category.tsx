import { CategoriesType } from "./Sidemenu"
import { MdExpandMore } from "react-icons/md"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

function Category({ name, subcategories }: CategoriesType) {
  const [categoryExpanded, setCategoryExpanded] = useState(false)

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
          <ul>
            {subcategories?.map((subcategory, i) => (
              <motion.li
                {...subcategoriesAnimation}
                key={`${subcategory}-${i}`}
                className="text-sm transition-transform hover:translate-x-4 hover:underline"
              >
                {subcategory}
              </motion.li>
            ))}
            <li className="text-sm transition-transform hover:translate-x-4 hover:underline">
              See all items
            </li>
          </ul>
        )}
      </AnimatePresence>
    </li>
  )
}

export default Category
