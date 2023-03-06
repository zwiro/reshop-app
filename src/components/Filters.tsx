import Checkbox from "./Checkbox"
import { categories } from "./Nav"
import useMediaQuery from "../hooks/useMediaQuery"

function Filters() {
  const isMdScreen = useMediaQuery("(min-width: 768px)")

  return (
    <div
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
    </div>
  )
}

export default Filters
