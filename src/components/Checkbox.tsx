import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CategoriesType } from "./Nav"
import SubCheckbox from "./SubCheckbox"

type CheckboxProps = {
  value: CategoriesType
}

function Checkbox({ value }: CheckboxProps) {
  const [category, setCategory] = useState(value)

  const { type } = useParams()
  const { subtype } = useParams()

  const checkPage = () => {}

  useEffect(() => {
    checkPage()
  }, [type, subtype])

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement
    if (target.checked) {
      setCategory((prevCategory) => {
        const newSubcategories = prevCategory.subcategories?.map(
          (subcategory) => {
            return {
              ...subcategory,
              isChecked: true,
            }
          }
        )
        return {
          ...prevCategory,
          isChecked: true,
          subcategories: newSubcategories,
        }
      })
    }
    if (!target.checked) {
      setCategory((prevCategory) => {
        const newSubcategories = prevCategory.subcategories?.map(
          (subcategory) => {
            return {
              ...subcategory,
              isChecked: false,
            }
          }
        )
        return {
          ...prevCategory,
          isChecked: false,
          subcategories: newSubcategories,
        }
      })
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <input
          onChange={(e) => handleChange(e)}
          type="checkbox"
          id={category.name}
          value={category.name}
          className="h-3 w-3 cursor-pointer appearance-none border border-zinc-700 bg-transparent transition-colors checked:bg-zinc-700 lg:h-4 lg:w-4"
          checked={category.isChecked}
        />
        <label
          htmlFor={category.name}
          className="cursor-pointer text-xl font-bold transition-colors hover:text-blue-600 lg:text-xl xl:text-2xl"
        >
          {category.name}
        </label>
      </div>
      <div>
        {category.subcategories?.map((subcategory, i) => (
          <SubCheckbox
            key={`${subcategory}-${i}`}
            subcategory={subcategory}
            setCategory={setCategory}
            category={category}
          />
        ))}
      </div>
    </div>
  )
}

export default Checkbox
