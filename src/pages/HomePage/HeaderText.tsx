type HeaderTextProps = {
  children: React.ReactNode
  isEven?: Boolean
}

function HeaderText({ children, isEven }: HeaderTextProps) {
  return (
    <p
      className={`absolute left-2 top-2 bg-slate-100/60 px-2 text-xl font-bold md:text-2xl xl:text-3xl ${
        isEven && "bottom-2 top-[unset] right-2 left-[unset]"
      }`}
    >
      {children}
    </p>
  )
}

export default HeaderText
