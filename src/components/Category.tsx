import { CategoriesType } from "./Sidemenu"

function Category({ name, subcategories }: CategoriesType) {
  return (
    <li>
      <span className="text-xl">{name}</span>
      <ul>
        {subcategories?.map((subcategory, i) => (
          <li key={`${subcategory}-${i}`} className="text-xs">
            {subcategory}
          </li>
        ))}
      </ul>
    </li>
  )
}

export default Category
