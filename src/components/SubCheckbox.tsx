import { useEffect } from "react"
import { CategoriesType, SubcategoriesType } from "./Nav"

type SubCheckboxProps = {
  subcategory: SubcategoriesType
  setCategory: (arg0: CategoriesType) => void
  category: CategoriesType
}

function SubCheckbox({ subcategory, setCategory, category }: SubCheckboxProps) {
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setCategory((prevCategory: CategoriesType) => {
      const newSubcategories = prevCategory.subcategories?.map(
        (subcategory) => {
          if (subcategory.name === target.value) {
            return {
              ...subcategory,
              isChecked: !subcategory.isChecked,
            }
          }
          return subcategory
        }
      )

      return {
        ...prevCategory,
        subcategories: newSubcategories,
      }
    })
  }

  useEffect(() => {
    if (category.subcategories?.every((item) => item.isChecked === false)) {
      setCategory((prevCategory: CategoriesType) => {
        return {
          ...prevCategory,
          isChecked: false,
        }
      })
    }
    if (category.subcategories?.some((item) => item.isChecked === true)) {
      setCategory((prevCategory: CategoriesType) => {
        return {
          ...prevCategory,
          isChecked: true,
        }
      })
    }
  }, [subcategory])

  return (
    <div className="flex items-center gap-2">
      <input
        onChange={(e) => handleChange(e)}
        type="checkbox"
        id={subcategory.name}
        value={subcategory.name}
        className="h-3 w-3 cursor-pointer appearance-none border border-zinc-700 bg-transparent transition-colors checked:bg-zinc-700 lg:h-4 lg:w-4"
        checked={subcategory.isChecked}
      />
      <label
        htmlFor={subcategory.name}
        className="cursor-pointer transition-colors hover:text-blue-600 lg:text-xl xl:text-2xl"
      >
        {subcategory.name}
      </label>
    </div>
  )
}

export default SubCheckbox
