type ProductOptionSelectTypes = {
  name: string
  options: string[]
}

function ProductOptionSelect({ name, options }: ProductOptionSelectTypes) {
  return (
    <select
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
