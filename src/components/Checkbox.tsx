import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CategoriesType } from "./Nav"

type CheckboxProps = {
  value: string
  isCategory?: boolean
  category: CategoriesType
}

function Checkbox({ value, isCategory, category }: CheckboxProps) {
  const { type } = useParams()
  const [isChecked, setIsChecked] = useState(
    type === "all" || type === category.name.toLowerCase() ? true : false
  )
  console.log(value, category, type)

  useEffect(() => {
    setIsChecked(
      type === "all" || type === category.name.toLowerCase() ? true : false
    )
  }, [type])

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
