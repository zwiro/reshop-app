import Checkbox from "./Checkbox"
import { categories } from "./Nav"

function Filters() {
  return (
    <div className="mt-4">
      {categories.map(
        (category, i) =>
          category.name !== "All items" && (
            <Checkbox key={`${category}-${i}`} value={category} />
          )
      )}
    </div>
  )
}

export default Filters
