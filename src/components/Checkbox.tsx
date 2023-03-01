type CheckboxProps = {
  value: string
  isCategory?: boolean
}

function Checkbox({ value, isCategory }: CheckboxProps) {
  return (
    <>
      <input
        type="checkbox"
        id={value}
        value={value}
        className="accent-zinc-700"
      />
      <label htmlFor={value} className={`${isCategory && "text-xl font-bold"}`}>
        {value}
      </label>
    </>
  )
}

export default Checkbox
