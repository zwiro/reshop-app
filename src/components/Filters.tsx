import Checkbox from "./Checkbox"
import { categories } from "./Nav"

function Filters() {
  return (
    <div className="mt-4">
      {categories.map(
        (category, i) =>
          category.name !== "All items" && (
            <div key={`${category}-${i}`}>
              <Checkbox value={category.name} category={category} isCategory />
              <ul>
                {category.subcategories?.map((subcategory, i) => (
                  <li key={`${subcategory}-${i}`}>
                    <Checkbox
                      value={subcategory.name}
                      subcategory={subcategory}
                      category={category}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )
      )}
    </div>
  )
}

export default Filters
