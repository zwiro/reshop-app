type ProductOptionSelectTypes = {
  name: string
  options: string[]
  setSize: (arg0: string) => void
  setColor: (arg0: string) => void
}

function ProductOptionSelect({
  name,
  options,
  setSize,
  setColor,
}: ProductOptionSelectTypes) {
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLSelectElement
    console.log(target.value)
    if (name === "Size") {
      setSize(target.value)
    } else if (name === "Color") {
      setColor(target.value)
    }
  }
  return (
    <select
      onChange={(e) => handleChange(e)}
      name={name}
      id={name}
      className="cursor-pointer border bg-zinc-700 px-1"
      defaultValue=""
    >
      <option value="" disabled>
        {name}
      </option>
      {options.map((option, i) => (
        <option key={`${option}-${i}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default ProductOptionSelect
