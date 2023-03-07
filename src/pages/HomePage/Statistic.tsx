type StatisticTypes = {
  image: string
  children: React.ReactNode
  isEven?: Boolean
}

function Statistic({ image, children, isEven }: StatisticTypes) {
  return (
    <div className="flex items-center justify-between gap-2">
      <img
        src={image}
        alt=""
        className={`mt-4 h-96 w-2/3 object-cover ${isEven && "order-2"}`}
      />
      <div className="grid gap-4 font-bold xl:text-2xl">{children}</div>
    </div>
  )
}

export default Statistic
