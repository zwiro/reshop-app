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
  console.log("subtype", subtype)
  console.log("value", value)
  const [isChecked, setIsChecked] = useState(
    type === "all" ||
      subtype === value.toLowerCase() ||
      (subtype === undefined && type === category.name.toLowerCase())
      ? true
      : false
  )

  useEffect(() => {
    setIsChecked(
      type === "all" ||
        subtype === value.toLowerCase() ||
        (subtype === undefined && type === category.name.toLowerCase())
        ? true
        : false
    )
  }, [type, subtype])

  return (
    <div className="flex items-center gap-2">
      <input
        onClick={() => setIsChecked((prevChecked) => !prevChecked)}
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
