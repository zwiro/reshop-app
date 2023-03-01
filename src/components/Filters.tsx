import Checkbox from "./Checkbox"
import { categories } from "./Nav"

function Filters() {
  return (
    <div className="mt-4">
      {categories.map((category, i) => (
        <div key={`${category}-${i}`}>
          <div className="flex gap-2">
            <Checkbox value={category.name} isCategory />
          </div>
          <ul>
            {category.subcategories?.map((subcategory, i) => (
              <li key={`${subcategory}-${i}`}>
                <div className="flex items-center gap-2">
                  <Checkbox value={subcategory} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Filters
