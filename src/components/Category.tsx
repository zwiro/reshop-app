import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { MdExpandMore } from "react-icons/md"
import { AnimatePresence, motion } from "framer-motion"
import { CategoriesType } from "../types"

function Category({ name, subcategories, path }: CategoriesType) {
  const [categoryExpanded, setCategoryExpanded] = useState(false)

  const subcategoriesAnimation = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: 0.2 },
  }

  const expandCategory = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCategoryExpanded((prevState) => !prevState)
  }

  //TODO: Close category when opening another one
  useEffect(() => {
    const hideCategory = () => {
      setCategoryExpanded(false)
    }

    document.addEventListener("click", hideCategory)

    return () => {
      document.removeEventListener("click", hideCategory)
    }
  }, [])

  return (
    <li
      onClick={(e) => subcategories && expandCategory(e)}
      className="my-4 cursor-pointer hover:z-50"
    >
      <div
        className={`flex items-center gap-0 px-2 ${
          categoryExpanded && "bg-zinc-700 text-slate-100"
        } `}
      >
        <span className="text-xl font-bold transition-colors hover:text-blue-500 sm:text-base lg:text-lg xl:text-xl">
          {!subcategories ? <Link to={path!}>{name}</Link> : name}
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
          <motion.ul
            {...subcategoriesAnimation}
            className="sm:bg-zinc-700 sm:p-2 sm:text-base sm:text-slate-100 md:absolute md:left-0 md:right-0 md:grid md:grid-cols-3 md:gap-4"
          >
            {subcategories?.map((subcategory, i) => (
              <Link key={`${subcategory}-${i}`} to={subcategory.path}>
                <li className="text-sm transition-transform hover:translate-x-4 hover:underline sm:transition-none sm:hover:translate-x-0 md:text-lg">
                  {subcategory.name}
                </li>
              </Link>
            ))}
            <li className="text-sm transition-transform hover:translate-x-4 hover:underline sm:transition-none sm:hover:translate-x-0 md:text-lg">
              <Link to={path!}> See all items</Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  )
}

export default Category
