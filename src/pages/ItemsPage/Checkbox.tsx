import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { ItemsContext } from "../../state"
import { CategoriesType } from "../../types"
import useMediaQuery from "../../hooks/useMediaQuery"
import SubCheckbox from "./SubCheckbox"

type CheckboxProps = {
  value: CategoriesType
}

function Checkbox({ value }: CheckboxProps) {
  const { addFilter, removeFilter } = useContext(ItemsContext)

  const [category, setCategory] = useState(value)

  const { type, subtype } = useParams()

  //TODO: Simplify this function
  const checkPage = () => {
    if (type === "all") {
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
    } else if (type && !subtype) {
      setCategory((prevCategory) => {
        if (prevCategory.subcategories) {
          if (prevCategory.name.toLowerCase() === type) {
            const newSubcategories = prevCategory.subcategories?.map(
              (subcategory) => {
                if (category.subcategories?.includes(subcategory)) {
                  return {
                    ...subcategory,
                    isChecked: true,
                  }
                } else {
                  return {
                    ...subcategory,
                    isChecked: false,
                  }
                }
              }
            )
            return {
              ...prevCategory,
              isChecked: false,
              subcategories: newSubcategories,
            }
          } else {
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
          }
        } else {
          if (prevCategory.name.toLowerCase() === type) {
            return {
              ...prevCategory,
              isChecked: true,
            }
          } else
            return {
              ...prevCategory,
              isChecked: false,
            }
        }
      })
    } else if (subtype) {
      setCategory((prevCategory) => {
        const newSubcategories = prevCategory.subcategories?.map(
          (subcategory) => {
            if (subcategory.name.toLowerCase() === subtype) {
              return {
                ...subcategory,
                isChecked: true,
              }
            } else return { ...subcategory, isChecked: false }
          }
        )
        if (category.name.toLowerCase() === type) {
          return {
            ...prevCategory,
            isChecked: true,
            subcategories: newSubcategories,
          }
        } else {
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
        }
      })
    } else {
      setCategory((prevCategory) => {
        if (prevCategory.subcategories) {
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
        } else {
          return {
            ...prevCategory,
            isChecked: false,
          }
        }
      })
    }
  }

  useEffect(() => {
    checkPage()
  }, [type, subtype])

  useEffect(() => {
    if (category.isChecked) {
      addFilter(category.name)
    } else if (!category.isChecked) {
      removeFilter(category.name)
    }
  }, [category])

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
    <div className="mb-4 flex flex-col gap-2">
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
