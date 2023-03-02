type CheckboxProps = {
  value: string
  isCategory?: boolean
}

function Checkbox({ value, isCategory }: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={value}
        value={value}
        className="h-3 w-3 cursor-pointer appearance-none border border-zinc-700 bg-transparent transition-colors checked:bg-zinc-700 lg:h-4 lg:w-4"
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
