import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CategoriesType, SubcategoriesType } from "./Nav"

type CheckboxProps = {
  value: string
  subcategory?: SubcategoriesType
  isCategory?: boolean
  category: CategoriesType
}

function Checkbox({ value, subcategory, isCategory, category }: CheckboxProps) {
  const { type } = useParams()
  const { subtype } = useParams()

  const [isChecked, setIsChecked] = useState(
    type === "all" ||
      subtype === value.toLowerCase() ||
      (subtype === value.toLowerCase() &&
        subcategory &&
        category.subcategories?.includes(subcategory)) ||
      (subtype === undefined && type === category.name.toLowerCase())
      ? true
      : false
  )

  const checkPage = () => {
    setIsChecked(
      type === "all" ||
        type === value.toLowerCase() ||
        (subtype === undefined && type === category.name.toLowerCase()) ||
        subtype === value.toLowerCase()
        ? true
        : false
    )
  }

  useEffect(() => {
    checkPage()
  }, [type, subtype])

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement
    if (
      category.subcategories?.some((subcategory) =>
        subcategory.name.includes(target.value)
      )
    ) {
      setIsChecked(true)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <input
        onChange={(e) => handleChange(e)}
        type="checkbox"
        id={value}
        value={value}
        className="h-3 w-3 cursor-pointer appearance-none border border-zinc-700 bg-transparent transition-colors checked:bg-zinc-700 lg:h-4 lg:w-4"
        checked={isChecked}
      />
      <label
        htmlFor={value}
        className={`cursor-pointer transition-colors hover:text-blue-600 lg:text-xl xl:text-2xl ${
          isCategory && "text-xl font-bold"
        }`}
      >
        {value}
      </label>
    </div>
  )
}

export default Checkbox
