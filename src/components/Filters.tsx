import Checkbox from "./Checkbox"
import { categories } from "./Nav"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"

function Filters() {
  const isMdScreen = useMediaQuery("(min-width: 768px)")

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={`mt-4 ${
        !isMdScreen &&
        "col-span-2 flex justify-center gap-4 border-b border-zinc-300 pb-2"
      }`}
    >
      {categories.map(
        (category, i) =>
          category.name !== "All items" && (
            <Checkbox
              key={`${category}-${i}`}
              value={category}
              name={category.name}
            />
          )
      )}
    </motion.div>
  )
}

export default Filters
