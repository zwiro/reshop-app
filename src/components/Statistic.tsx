type StatisticTypes = {
  image: string
  children: React.ReactNode
  isOdd?: Boolean
}

function Statistic({ image, children, isOdd }: StatisticTypes) {
  return (
    <div className="flex items-center justify-between gap-2">
      <img
        src={image}
        alt=""
        className={`mt-4 h-96 w-2/3 object-cover ${isOdd && "order-2"}`}
      />
      <div className="grid gap-4 font-bold">{children}</div>
    </div>
  )
}

export default Statistic
